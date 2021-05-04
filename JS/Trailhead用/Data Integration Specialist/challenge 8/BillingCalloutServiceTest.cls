

@isTest
private class BillingCalloutServiceTest {

    @testSetup static void setup() {
        Opportunity opp = TestDataFactory.createOpportunity('New');
        Project__c project = TestDataFactory.createProject(opp.Id);
    }

    @isTest
    private static void testcallBillingService() {
        Test.setMock(WebServiceMock.class, new BillingCalloutServiceMock());
        Test.startTest();
        BillingCalloutService.callBillingService('1234', 10000);
        Test.stopTest();
        // Test that the project status has been updated to 'Billed'
        Project__c p = [SELECT Id, Name, Status__c, ProjectRef__c, Billable_Amount__c FROM Project__c
                        WHERE ProjectRef__c = '1234'];
        System.assertEquals('Billed', p.Status__c);
    }

    @isTest
    private static void testcallBillingServiceNegative() {
        Test.setMock(WebServiceMock.class, new BillingCalloutServiceMockFailure());
        Test.startTest();
        BillingCalloutService.callBillingService('1234', 10000);
        Test.stopTest();
        // Test that the project status has been updated to 'Billed'
        Project__c p = [SELECT Id, Name, Status__c, ProjectRef__c, Billable_Amount__c FROM Project__c
                        WHERE ProjectRef__c = '1234'];
        System.assertEquals('Running', p.Status__c);
    }
}