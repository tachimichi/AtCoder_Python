

//* 非同期でBillingServiceProxyクラスのInvoicesPortSoap11メソッドをコールしたい
public with sharing class BillingCalloutService {

    //* 非同期かつコールアウトなので、@future(callout=true)アノテーション
    @future(callout=true)
    public static void callBillingService(String ProjectRef, Decimal Amount) {
        
        System.Debug(ProjectRef + ': ' + Amount);
        BillingServiceProxy.project project = new BillingServiceProxy.project();
        project.projectid = ProjectRef;
        project.billAmount = Amount;

        // //* BillingServiceProxy.projectクラスには、ユーザIDとパスワードの設定が必要なので、カスタム設定ServiceCredentials__cから取得
        // //* Authentication
        // ServiceCredentials__c ServiceCredentials = ServiceCredentials__c.getInstance('BillingServiceCredential');
        // System.debug(ServiceCredentials);
        // if (ServiceCredentials != null) {
        //     project.username = ServiceCredentials.Username__c;
        //     project.password = ServiceCredentials.Password__c;
        // }
        project.username = CredentialHelper.getSoapUsername();
        project.password = CredentialHelper.getSoapPassword();
        //* ----------------------------------------------------------------

        BillingServiceProxy.InvoicesPortSoap11 invoice = new BillingServiceProxy.InvoicesPortSoap11();
        String status = invoice.billProject(project);

        if (status == '200') {
            // update project status
            Project__c p = [SELECT Id, Name, Status__c, ProjectRef__c, Billable_Amount__c 
                                    FROM Project__c
                                    WHERE ProjectRef__c = :ProjectRef
                                ];
            p.Status__c = 'Billed';
            update p;
        }
    }
}