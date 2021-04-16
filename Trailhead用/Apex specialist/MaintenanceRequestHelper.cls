public with sharing class MaintenanceRequestHelper {
    public static void updateWorkOrders(List<Case> caseList) {
        //* リストの生成
        List<case> newCases = new List<Case>();
        Map<String,Integer> result = getDueDate(caseList);
        //* cからcaseListまでループ
        for(Case c : caseList) {
            //* 条件：ステータスと、typeが指示通り一致している場合
            if(c.status == 'closed') {
                if(c.type == 'Repair' || c.type == 'Routine Maintenance') {
                    //* insertするための配列を生成
                    //? スコープの範囲は？
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
                    newCase.ProductId = c.ProductId;
                    newCase.Date_Reported__c = Date.today();
                    //*-----------------------------------------

                    //? 次の期日はレコード作成日+メンテナンスサイクル
                    if(result.get(c.Id) != null) {
                        newCase.Date_Due__c = Date.today()+result.get(c.Id);
                    } else {
                        newCase.Date_Due__c = Date.today();
                    }
                    newCases.add(newCase);
                }
            }
        }
        insert newCases;   
    }
    //* SOQL文
    public static  Map<String,Integer> getDueDate(List<case> CaseIDs){       
        Map<String,Integer> result = new Map<String,Integer>();
        Map<Id, case> caseKeys = new Map<Id, case> (CaseIDs);
        //
        List<AggregateResult> wpc = [select Maintenance_Request__r.ID cID,min(Equipment__r.Maintenance_Cycle__c)cycle
                                                    from Equipment_Maintenance_Item__c  where  Maintenance_Request__r.ID in :caseKeys.keySet() group by             Maintenance_Request__r.ID ];
        //*
        for(AggregateResult res :wpc) {
            Integer addDays=0;
            if(res.get('cycle')!=null)
                addDays += Integer.valueOf(res.get('cycle'));
            result.put((String)res.get('cID'),addDays);
        }
        return result;
    }
}