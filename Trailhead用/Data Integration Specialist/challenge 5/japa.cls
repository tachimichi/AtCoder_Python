@RestResource(urlMapping='/Project__c/*')
global class ProjectRESTService {
    @HttpPost
    global static String postProjectData(String ProjectRef,
                                                        String ProjectName, 
                                                        String OpportunityId, 
                                                        Date StartDate,
                                                        Date EndDate, 
                                                        Double Amount, 
                                                        String Status) {
            
            String massage = '';
            Project__c project = new Project__c();
            Savepoint sp = Database.setSavepoint();
            
            try{
                 // TODO ProjectのUpsert処理
            
                 // TODO OpportunityのUpsert処理
                
                massage = 'OK';
        }
        catch(Exception e){
            Database.rollback(sp);
            massage = e.getMessage();
        }
        return massage;
    }
}