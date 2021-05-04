trigger ProjectTrigger on Project__c (after update) {
  //Call the Billing Service callout logic here 
    for(Project__c p : Trigger.New) {
        System.Debug(p.Name + ': ' + p.Status__c);
        if (p.Status__c == 'Billable') {
            BillingCalloutService.callBillingService(p.ProjectRef__c, p.Billable_Amount__c);
        }
    }
}

/*
Test trigger in console

Project__c p = [SELECT Id, Name, Status__c, ProjectRef__c, Billable_Amount__c FROM Project__c
                    WHERE Id= 'a002w000007V8HYAA0'
                    ];
p.Status__c='Billable';
update p;
*/