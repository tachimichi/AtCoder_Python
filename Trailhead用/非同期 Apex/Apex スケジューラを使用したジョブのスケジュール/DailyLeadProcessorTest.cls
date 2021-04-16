@isTest
public class DailyLeadProcessorTest {
    
    //* テストデータの作成
    @testSetup
    static void setup(){
        //* 空のリストを作成
        List<Lead> leadLst = new List<Lead>();
        //* 条件をそろえる
        for ( Integer i = 0; i<200; i++){
            leadLst.add(new Lead(
                LastName = 'Test' +i,
                Company = 'Name' + i,
                LeadSource = NULL
            ));
        }
        Insert leadLst;
    }
    //* -------------------------------

    @isTest
    static void testMethod1(){
        
        List<Lead> leadLst = [SELECT Id FROM Lead LIMIT 200];
        //* スケジュールを設定する
        String CRON_EXP = '0 0 0 15 3 ? 2022';
        
        System.Test.startTest();
        //* System.Schedule メソッドは、①ジョブの名前、②ジョブの実行予定日時を表すために使用する CRON 式、③クラスの名前
        String jobId = System.schedule('DailyLeadProcessor',
                                        CRON_EXP, 
                                        new DailyLeadProcessor());         

        System.Test.stopTest();
    }
    
}