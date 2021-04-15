@isTest
public class AddPrimaryContactTest {
    
    @testSetup
    static void setup(){
        
        List<Account> accList = new List<Account>();

        for ( Integer i=0; i<100; i++) {
            //* 50個ずつデータを作成する
            if ( i < 50 ) {
                AccList.add(new Account(
                    BillingState ='NY',
                    Name = 'Test' + i));
            } else {                
                AccList.add(new Account(
                    BillingState ='CA',
                    Name = 'Test' + i));                
            }
        }       
        Insert accList;
        
        Contact c = new Contact(
            LastName = 'test'
        );
        Insert c;
    }   

    // --------------------------------------
    @isTest
    static void testMethod1(){
        
        Contact c = [SELECT Id From Contact];
        String s = 'CA';
        
        AddPrimaryContact apc = new AddPrimaryContact(c,s);
        
        System.Test.startTest();        
        System.enqueueJob(apc);
        System.Test.stopTest();        
        
        System.assertEquals(50, [select count() from account where BillingState = :s]);
        
    }
}