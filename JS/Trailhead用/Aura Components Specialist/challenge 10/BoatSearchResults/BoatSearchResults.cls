public with sharing class BoatSearchResults {
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [SELECT Id, Name FROM BoatType__c];
    }
    
    //TODO challenge 4
    //* getBoatsメソッドでIDを引数にし、検索ロジックを作成
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        //* IDが空の場合は、全BoatTypeが対象になる
        if(boatTypeId == null || boatTypeId == ''){
            return [SELECT Id, Name, BoatType__c, Contact__r.Name, Picture__c FROM Boat__c];
        }
        //* IDがある場合
        else{
            return [SELECT Id, Name, BoatType__c, Contact__r.Name, Picture__c FROM Boat__c WHERE BoatType__c = :boatTypeId];
        }
    }
    
}