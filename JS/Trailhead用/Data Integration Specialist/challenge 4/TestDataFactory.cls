@isTest
public with sharing class TestDataFactory {
    public static Opportunity createOpportunity(String stage) {
        Opportunity opp = new Opportunity(
            Name = 'Test Opportunity',
            CloseDate = Date.newInstance(2020, 7, 31),
            Type = 'New Project',
            StageName = stage
        );
        insert opp;
        return opp;
    }

    public static Project__c createProject(Id oppId) {
        Project__c project = new Project__c (
            ProjectRef__c = '1234', 
            Name = 'Test Project', 
            Opportunity__c = oppId, 	
            Status__c = 'Running',
            Start_Date__c = Date.newInstance(2020, 7, 1),
            End_Date__c = Date.newInstance(2020, 7, 31), 
            Billable_Amount__c = 10000
        );
        insert project;
        return project;
    }
}