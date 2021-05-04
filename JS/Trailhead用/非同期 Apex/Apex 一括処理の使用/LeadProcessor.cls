
global class LeadProcessor implements Database.Batchable<sObject> {
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        
        return Database.getQueryLocator('SELECT Id FROM Lead');
        
    }
    
    global void execute(Database.BatchableContext bc, List<Lead> scope){
        
        List<Lead> leadList = new List<Lead>();
        
        for (Lead l : scope){
            l.LeadSource = 'Dreamforce';
        } 
    }
    global void finish(Database.BatchableContext bc){
        
    }
}