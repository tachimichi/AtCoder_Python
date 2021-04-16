@isTest
private class AccountManagerTest{
    @isTest static void test() {
        Account acc = new Account(Name = 'testacc');
        insert acc;
        Contact con = new Contact(LastName = 'testcon',AccountId = acc.Id);
        insert con;
        Id accId = acc.Id;
        
        RestRequest req = new RestRequest();
        req.requestURI = 'https://sandeepidentity-dev-ed.my.salesforce.com/services/apexrest/Accounts/'
　　　　 + accId+ '/contacts';
        req.httpMethod = 'GET';
        RestContext.request = req;
        
        Account resultAcc = AccountManager.getAccount();
    }
}