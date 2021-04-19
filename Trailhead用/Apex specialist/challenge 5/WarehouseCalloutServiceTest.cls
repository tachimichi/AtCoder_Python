@isTest
private class WarehouseCalloutServiceTest {
    @TestSetup
    static void makeData(){
        Product2 testEquipment = new Product2();
        testEquipment.Name = 'Test';
        testEquipment.Lifespan_Months__c = 2;
        testEquipment.Maintenance_Cycle__c = 12;
        testEquipment.Replacement_Part__c = true;
        testEquipment.Warehouse_SKU__c = '100003';
        insert testEquipment;
        
    }
    @isTest
    private static void positive() {
        Test.setMock(HttpCalloutMock.class, new WarehouseCalloutServiceMock());
        Test.startTest();
        System.enqueueJob(new WarehouseCalloutService());
        Test.stopTest();
        List<Product2> firstRecievedEquipment = [SELECT Id, Name FROM Product2 WHERE Warehouse_SKU__c = '100003'];
        List<Product2> secondRecievedEquipment = [SELECT Id, Name FROM Product2 WHERE Warehouse_SKU__c <> '100003'];
        System.assertEquals(1, firstRecievedEquipment.size());
        System.assertEquals(1, secondRecievedEquipment.size());
        System.assertEquals('Generator 1000 kW', firstRecievedEquipment[0].Name);
        System.assertEquals('Cooling Fan', secondRecievedEquipment[0].Name);
    }
}