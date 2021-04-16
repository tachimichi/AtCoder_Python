global class DailyLeadProcessor implements Schedulable {

    global void execute(SchedulableContext ctx) {
            //* LeadSourceが空白、且つ、最初の200件を取得
            List<Lead> leadList = [SELECT Id, LeadSource FROM Lead 
                                            WHERE LeadSource = NULL LIMIT 200];
            //* 空のupdate用リストを作成
            List<Lead> updList = new List<Lead>();

            for(Lead l : leadList) {
                if(l.LeadSource == NULL) {
                    l.LeadSource = 'Dreamforce';
                    //* update用に追加
                    updList.add(l);
                }
            }
            Update updList;
    }
}