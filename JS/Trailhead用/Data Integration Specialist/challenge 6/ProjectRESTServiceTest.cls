
/* 
* カバレッジが通るようにテストケースを作成する
*/

@isTest
private class ProjectRESTServiceTest {

    @isTest static void testGetProjectById() {
    
        Opportunity opp = TestDataFactory.createOpportunity('New');
        Project__c project = TestDataFactory.createProject(opp.Id);

        // Set up a test request
        RestRequest request = new RestRequest();
        // Set request properties
        // request.requestUri = 'https://yourInstance.salesforce.com/services/apexrest/project/' + opp.Id;
        request.requestUri = '/services/apexrest/project/' + project.Id;
        request.httpMethod = 'GET';
        RestContext.request = request;
        
        Project__c p = ProjectRESTService.getProjectById();
        System.assert(p != null);
        System.assertEquals('Test Project', p.Name);
    }

    
    @isTest static void testPostProjectData() {
        
        Opportunity opp = TestDataFactory.createOpportunity('New'); 
        
        RestRequest request = new RestRequest();
        request.requestUri = '/services/apexrest/project/';
        request.httpMethod = 'POST';
        request.addHeader('Content-Type', 'application/json');
        request.requestBody = Blob.valueOf('{' +
            '"ProjectRef": 1234, ' +
            '"ProjectName": "First Project", ' +
            '"OpportunityId": "' + opp.Id + '", ' +
            '"StartDate": "2020-07-01", ' +
            '"EndDate": "2020-07-31", ' +
            '"Amount": 10000'
        );
        RestContext.request = request;
        String result = ProjectRESTService.postProjectData(
            '1234', 
            'First Project', 
            opp.Id, 
            Date.valueOf('2020-07-01'), 
            Date.valueOf('2020-07-31'), 
            10000,
            'Running'
        );

        // Verify record was created
        System.assert(result == 'OK');
        List<Project__c> projects = [SELECT ProjectRef__c, Name, Opportunity__c, Start_Date__c,
                                                            End_Date__c, Billable_Amount__c, Status__c 
                                                FROM Project__c
                                                WHERE Opportunity__c=:opp.Id];

        System.assertEquals(projects.size(), 1);
        Project__c project = projects[0];
        System.assert(project != null);
        System.assert(project.Name == 'First Project');
        System.assert(project.Status__c == 'Running');

        // Verify related opportunity was updated
        Opportunity updatedOpp = [SELECT Id, StageName, DeliveryInstallationStatus__c
                                                FROM Opportunity
                                                WHERE Id=:opp.Id];
        // System.assertEquals('In Progress', updatedOpp.DeliveryInstallationStatus__c);

        // Update project
        String result2 = ProjectRESTService.postProjectData(
            '1234', 
            'First Project', 
            opp.Id, 
            Date.valueOf('2020-07-01'), 
            Date.valueOf('2020-07-31'), 
            10000,
            'Billable'
        );

        // Verify project record was updated
        System.assert(result2 == 'OK');
        Project__c updatedProjects = [SELECT ProjectRef__c, Name, Opportunity__c, Start_Date__c, End_Date__c, Billable_Amount__c, Status__c 
                                        FROM Project__c WHERE Id=:project.Id];

        System.assert(updatedProjects != null);
        System.assert(updatedProjects.Status__c == 'Billable');
        
    }

    @isTest static void testPostProjectDataNegative() {
        
        // Call the endpoint with an OpportunityId that doesn't exist
        Id wrongId = Id.valueOf('001xa000003DIlo');
        RestRequest request = new RestRequest();
        request.requestUri = '/services/apexrest/project/';
        request.httpMethod = 'POST';
        request.addHeader('Content-Type', 'application/json');
        request.requestBody = Blob.valueOf('{' +
            '"ProjectRef": 1234, ' +
            '"ProjectName": "First Project", ' +
            '"OpportunityId": "' + wrongId + '", ' +
            '"StartDate": "2020-07-01", ' +
            '"EndDate": "2020-07-31", ' +
            '"Amount": 10000'
        );
        RestContext.request = request;
        String result = ProjectRESTService.postProjectData(
            '1234', 
            'First Project', 
            wrongId, 
            Date.valueOf('2020-07-01'), 
            Date.valueOf('2020-07-31'), 
            10000,
            'Running'
        );

        // Verify that an error was triggered
        System.assertEquals('List has no rows for assignment to SObject', result);
    }
}