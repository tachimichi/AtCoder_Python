@isTest
private class MaintenanceRequestHelperTest {
    @TestSetup
    static void makeData(){
        Product2 testEquipment = new Product2();
        testEquipment.Name = 'Test';
        testEquipment.Maintenance_Cycle__c = 10;
        testEquipment.Replacement_Part__c = true;
        Vehicle__c testVehicle = new Vehicle__c();
        testVehicle.Name = 'Test';
        insert testEquipment;
        insert testVehicle;
    }
    
    @isTest
    private static void positiveCase() {
        Product2 testEquipment = [SELECT Id FROM Product2];
        Vehicle__c testVehicle = [SELECT Id FROM Vehicle__c];
        Case newRequest = new Case();
        newRequest.Type = 'Routine Maintenance';
        newRequest.Status = 'New';
        newRequest.Origin = 'Web';
        newRequest.Date_Reported__c = System.today();
        newRequest.Vehicle__c = testVehicle.Id;
        insert newRequest;
        Equipment_Maintenance_Item__c firstItem = new Equipment_Maintenance_Item__c();
        Equipment_Maintenance_Item__c secondItem = new Equipment_Maintenance_Item__c();
        firstItem.Maintenance_Request__c = newRequest.Id;
        firstItem.Equipment__c = testEquipment.Id;
        firstItem.Quantity__c = 10;
        secondItem.Maintenance_Request__c = newRequest.Id;
        secondItem.Equipment__c = testEquipment.Id;
        secondItem.Quantity__c = 20;
        insert firstItem;
        insert secondItem;
        newRequest.Status = 'Closed';
        Test.startTest();
        update newRequest;
        Test.stopTest();
        Case request = [SELECT Id, Status, Type, Date_Due__C, (SELECT Id FROM Equipment_Maintenance_Items__r) FROM Case WHERE Status <> 'Closed'];
        System.assertEquals('New', request.Status);
        System.assertEquals('Routine Maintenance', request.Type);
        System.assertEquals(System.today()+10, request.Date_Due__c);
        System.assertEquals(2, request.Equipment_Maintenance_Items__r.size());
    }

    @isTest
    private static void negativeCase() {
        //replacementpart=false
        Case newRequest = new Case();
        newRequest.Type = 'Routine Maintenance';
        newRequest.Status = 'New';
        newRequest.Origin = 'Web';
        insert newRequest;
        newRequest.Status = 'Closed';
        try{
            update newRequest;
        }catch(Exception e){
            System.debug(e.getMessage());
            System.assert(e.getMessage().contains('Exception'));
        }
    }
    
    @isTest
    private static void bulkCase(){
        Product2 testEquipment = [SELECT Id FROM Product2];
        Vehicle__c testVehicle = [SELECT Id FROM Vehicle__c];
        List<Case> newRequests = new List<Case>();
        for(Integer i=0; i<300; i++){
            Case newRequest = new Case();
            newRequest.Type = 'Routine Maintenance';
            newRequest.Status = 'New';
            newRequest.Origin = 'Web';
            newRequest.Date_Reported__c = System.today();
            newRequest.Vehicle__c = testVehicle.Id;
            newRequests.add(newRequest);
        }
        insert newRequests;
        List<Equipment_Maintenance_Item__c> newItems = new List<Equipment_Maintenance_Item__c>();
        for(Case request: newRequests){
            Equipment_Maintenance_Item__c item = new Equipment_Maintenance_Item__c();
            item.Maintenance_Request__c = request.Id;
            item.Equipment__c = testEquipment.Id;
            item.Quantity__c = 10;
            newItems.add(item);
        }
        insert newItems;
        for(Case request: newRequests){
            request.Status = 'Closed';
        }
        Test.startTest();
        update newRequests;
        Test.stopTest();
        List<Case> recievedRequests = [SELECT Id, Status, Type, Date_Due__c, (SELECT Id FROM Equipment_Maintenance_Items__r) FROM Case WHERE Status <> 'Closed'];
        System.assertEquals(newRequests.size(), recievedRequests.size());
        for(Case request: recievedRequests){
            System.assertEquals('New', request.Status);
            System.assertEquals('Routine Maintenance', request.Type);
            System.assertEquals(System.today()+10, request.Date_Due__c);
            System.assertEquals(1, request.Equipment_Maintenance_Items__r.size());
        }
    }
}