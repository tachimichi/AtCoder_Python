public with sharing class MaintenanceRequestHelper {
    
    public static void updateWorkOrders(List<Case> caseList) {
        Map<String,Integer> IDToCycleMap = getMinMaintenanceCycleByCaseID(caseList);
        
        List<case> newCasesList = new List<Case>();        
        for(Case oldCase : caseList){
            if(oldCase.status=='closed' && (oldCase.type=='Repair' || oldCase.type=='Routine Maintenance')){
                Case newCase = new Case();
                newCase.Status = 'New';
                newCase.Origin = 'web';
                newCase.Type = 'Routine Maintenance';
                newCase.Subject = 'Routine Maintenance of Vehicle';
                newCase.Vehicle__c = oldCase.Vehicle__c;
                newCase.Date_Reported__c = Date.today();
                newcase.Cloned_Case_Id__c = oldCase.Id;
                newCase.Date_Due__c = IDToCycleMap.get(oldCase.Id) == null ? Date.today() : Date.today()+IDToCycleMap.get(oldCase.Id);           
                newCasesList.add(newCase);
            }
        }       
		insert newCasesList;     
        
        updateEquipments(newCasesList);
    }
    
    //update Equipments : Reparent them with new Case
    public static void updateEquipments(List<Case> newCasesList){
        List<Equipment_Maintenance_Item__c> equipmentsList = [select ID, Maintenance_Request__c from Equipment_Maintenance_Item__c];
        List<Equipment_Maintenance_Item__c> updatedEquipmentsList  = new List<Equipment_Maintenance_Item__c>();
        for(Case c : newCasesList){
            for(Equipment_Maintenance_Item__c e : equipmentsList ){
                if(e.Maintenance_Request__c == c.Cloned_Case_Id__c){
                    e.Maintenance_Request__c = c.Id;
                    updatedEquipmentsList.add(e);
                }
            }
        }
        update updatedEquipmentsList;
    }
    
    //Get min Maintenance Cycle by  Case IDs    
    public static Map<String,Integer> getMinMaintenanceCycleByCaseID(List<Case> caseList){
        Map<String,Integer> IDToCycleMap = new Map<String,Integer>();
        List<String> CaseIDList = new List<String>();   
        for(Case eachCase  : caseList){
            caseIDList.add(eachCase.ID);
        }
        
        List<AggregateResult> result =[SELECT Maintenance_Request__r.ID CaseID, MIN(Equipment__r.Maintenance_Cycle__c)  Cycle 
                                                    FROM Equipment_Maintenance_Item__c 
                                                    WHERE Maintenance_Request__r.ID 
                                                    IN :caseIDList AND Equipment__r.Maintenance_Cycle__c != null group by Maintenance_Request__r.ID];
        
        
        for(AggregateResult a : result) {
            IDToCycleMap.put((String)a.get('CaseID'),Integer.valueOf(a.get('Cycle')));
        }
        return IDToCycleMap;
    }
}