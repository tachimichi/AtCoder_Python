@RestResource(urlMapping='/Account/*')
global with sharing class AccountManager {
    @HttpGet
    global static Account getAccount(){
        RestRequest req = RestContext.request;
        String accountId = req.requestURI.substringBetween('Accounts/','/contacts');
        
        Account objAccount = [
            Select Id,Name,(Select Id,Name From Contacts) From Account Where Id = :accountId
        ];
        
        return objAccount;
    } 
}