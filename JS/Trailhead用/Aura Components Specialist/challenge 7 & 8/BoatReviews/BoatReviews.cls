
// TODO challenge 8
//* getAllメソッドを作成
//* boatIdを引数としてBoatIdと紐づくBoatRebiewレコードをreturn

public with sharing class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        return [SELECT Name, Comment__c, Rating__c, LastModifiedDate, 
                            CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, 
                            CreatedBy.CompanyName 
                    FROM BoatReview__c
                    WHERE Boat__c = :boatId
                ];
    }
}