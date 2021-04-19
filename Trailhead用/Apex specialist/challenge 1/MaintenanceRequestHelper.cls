public with sharing class MaintenanceRequestHelper {
    //* トリガでfireされたデータを引数として
    public static void updateWorkOrders(List<Case> caseList) {
        // TODO: Complete the method to update workorders
        List<case> newCases = new List<Case>();
        //* getDueDateを使用して日付の取得（resultに格納）
        Map<String,Integer> result = getDueDate(caseList);
        // Id格納用の変数
        List<Id> clonedCaseIds = new List<Id>();
        // Item格納用の変数
        List<Equipment_Maintenance_Item__c> newItems = new List<Equipment_Maintenance_Item__c>();
        //* ---------------------------------------------------------------------------------
        //* トリガのデータをループ処理
        for(Case c : caseList){
            if(c.status=='Closed')
                if(c.type=='Repair' || c.type=='Routine Maintenance'){
                    Case newCase = new Case();
                    // ------------------------------------------------
                    //* 毎回自動的に定期メンテナンスリクエストを作成
                    //TODO 新しい Maintenance Request の項目は以下の条件を満たす
                    //? Subject は何らかの文字列が入る(not null)
                    //? Type は Routine Maintenance
                    //? Date Reported はレコード生成した日
                    //? Date Due(期日)は後述する条件を満たす日
                    //? 車両(Vehicle)と機器(Equipment)は元の Maintenance Request と同じもの
                    // ------------------------------------------------
                    newCase.Status = 'New';
                    newCase.Origin = 'web';
                    newCase.Type = 'Routine Maintenance';
                    newCase.Subject = 'Routine Maintenance of Vehicle';
                    newCase.Vehicle__c = c.Vehicle__c;
                    newCase.cloned_case_id__c = c.Id;
                    newCase.Date_Reported__c = Date.today();
                    if(result.get(c.Id) != null)
                        newCase.Date_Due__c = Date.today()+result.get(c.Id);
                    else
                        newCase.Date_Due__c = Date.today();
                    newCases.add(newCase);
                    clonedCaseIds.add(c.Id);
                }
        }        
        insert newCases;   
        //* -----------------------------------------------------------------------
        //* トリガでfireされ、メンテナンスがクローズされたitemに対する、情報を取得する
        //? 
        List<Equipment_Maintenance_Item__c> items = [select id,name,Maintenance_Request__c 
                                                                            from Equipment_Maintenance_Item__c
                                                                            where Maintenance_Request__c
                                                                            in:clonedCaseIds];
        //* 新規作成したケースに対するループ処理
        for(Case caseO : newCases) {
            
            for(Equipment_Maintenance_Item__c item : items){
                if(caseO.cloned_case_id__c == item.Maintenance_Request__c){
                    Equipment_Maintenance_Item__c newItem = new Equipment_Maintenance_Item__c();
                    newItem.Maintenance_Request__c = caseO.Id;
                    newItems.add(newItem);
                }
            }
        }
        insert newItems;
    }        
    
    //* 日付の調整
    public static Map<String,Integer> getDueDate(List<Case> CaseIDs){
        Map<String,Integer> result = new Map<String,Integer>();
        Map<Id, case> caseKeys = new Map<Id, case> (CaseIDs);        
        List<AggregateResult> wpc=[select Maintenance_Request__r.ID cID,min(Equipment__r.Maintenance_Cycle__c)cycle
                                    from Equipment_Maintenance_Item__c where  Maintenance_Request__r.ID in :caseKeys.keySet() group by  Maintenance_Request__r.ID ];
        for(AggregateResult res : wpc){
            Integer addDays=0;
            if(res.get('cycle')!=null)
                addDays+=Integer.valueOf(res.get('cycle'));
            result.put((String)res.get('cID'),addDays);
        }
        return result;
    }
}