trigger MaintenanceRequest on Case (before update, after update) {
    // call MaintenanceRequestHelper.updateWorkOrders  
    Map<Id,Case> caseList = new Map<Id,Case>();

    if(Trigger.isUpdate  && Trigger.isAfter) {
        for(Case oCase : Trigger.new) {
            if (oCase.IsClosed && (oCase.Type.equals('Repair') || oCase.Type.equals('Routine Maintenance'))) {
                caseList.put(oCase.Id, oCase);
            }
        }
        // -----------------------------------
        if(caseList.size() > 0){
            System.debug('Calling updateWorkOrders from MaintenanceRequestHelper Class');
            System.debug('MaintenanceRequestHelperクラスから、updateWorkordersメソッドを呼び出した');
            MaintenanceRequestHelper.updateWorkOrders(caseList);    
        }        
    } 
}