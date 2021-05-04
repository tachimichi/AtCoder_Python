@isTest
public class LeadProcessorTest {
    
    @testSetup
    static void setup(){
        
        List<Lead> leadList = new List<Lead>();
        
        for( Integer i = 0; i < 200; i++){
            LeadList.add(new Lead(
                Company = 'Test' + i,
                LastName = 'Name' + i
            ));
        }
        Insert LeadList;
    }

    //* ----------------------------------
    
    @isTest
    static void test() {        
        System.Test.startTest();
        
        LeadProcessor lp = new LeadProcessor();
        Database.executeBatch(lp);
        
        System.Test.stopTest();
    }   
}