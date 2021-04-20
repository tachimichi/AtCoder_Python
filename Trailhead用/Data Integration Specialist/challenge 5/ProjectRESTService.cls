
//* 元になった商談に対応するプロジェクトレコードをUpsert
//* RESTとして使用されるには、
//* クラスに@RestResource(urlMapping=’/Project__c/*’)アノテーションを、
//* メソッドに@HttpPostアノテーションが必要

@RestResource(urlMapping='/project/*')
global with sharing class ProjectRESTService {
    
    //* IDからプロジェクトの情報を取得する
    @HttpGet
    global static Project__c getProjectById() {
        // Only for testing the endpoint - Use ID: a002w000007V8HYAA0
        RestRequest request = RestContext.request;
        // grab the opportunityId from the end of the URL
        String projectId = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        Project__c project = [SELECT Id, Name, 	ProjectRef__c, Status__c 
                                        FROM Project__c
                                        WHERE Id= :projectId];
        return project;
    }
    
    @HttpPost
    global static String postProjectData(String	ProjectRef, 
                                                        String	ProjectName, 
                                                        String	OpportunityId, 
                                                        Date	StartDate, 
                                                        Date	EndDate, 
                                                        Double	Amount, 
                                                        String	Status) {
            
        // upsert Project
        SavePoint sp = Database.setSavePoint();

        try {
            Project__c project = new Project__c (ProjectRef__c = ProjectRef, 
                                                        Name = ProjectName, 
                                                        Opportunity__c = OpportunityId, 
                                                        Start_Date__c = StartDate, // date string in YYYY-MM-dd format.
                                                        End_Date__c = EndDate,
                                                        Billable_Amount__c = Amount,
                                                        Status__c = Status
                                                    );

            // update the Delivery/Installation Status field on the associated opportunity record to "In Progress"
            //* IDが該当する者は、商談のDeliveryInstallationStatus__cを更新したい
            Opportunity opp = [SELECT Id, Name, DeliveryInstallationStatus__c
                                        FROM Opportunity
                                        WHERE Id= :OpportunityId];
            opp.DeliveryInstallationStatus__c = 'In Progress';

            //* ProjectのUpsert処理
            //* OpportunityのUpsert処理
            upsert project Project__c.Fields.ProjectRef__c;
            update opp;
            //* メッセージを返す
            return 'OK';

        } catch (Exception e) {
            //* セーブポイントでのロールバック
            // Rollback
            Database.rollback(sp);
            System.debug('A DML exception has occurred: ' + e.getMessage());
            System.debug('エラーを表示する：' + e.getMessage());
            //* メッセージを返す
            return e.getMessage();
        }
    }
}

/*
Example POST payload
{
    "ProjectRef": 1234, 
    "ProjectName": "First Project", 
    "OpportunityId": "0062w000005sWnxAAE", 
    "StartDate": "2020-07-01",
    "EndDate": "2020-07-31",
    "Amount": 10000,
    "Status": "Running"
}
*/