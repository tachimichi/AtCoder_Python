global class WarehouseSyncSchedule implements Schedulable {

    global void execute(SchedulableContext ctx) {
        System.enqueueJob(new WarehouseCalloutService());
    }
}

//* アノニマスでの実行コード①
System.schedule('WarehouseSyncScheduleJob', '00 00 17 * * ?', new WarehouseSyncSchedule());

//* アノニマスでの実行コード②（確認付き）
String jobId = System.schedule('WarehouseSyncScheduleJob', '00 00 17 * * ?', new WarehouseSyncSchedule());
CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered, NextFireTime FROM CronTrigger WHERE id = :jobId];
System.debug(ct);


//* スケジュール済みジョブを一括削除する方法
// List<CronTrigger> ctList = [SELECT Id FROM CronTrigger WHERE CronJobDetail.JobType = '7'];

// // ジョブ名を指定して削除する場合
// List<CronTrigger> ctList = [SELECT Id FROM CronTrigger WHERE CronJobDetail.JobType = '7' AND CronJobDetail.Name = 'ジョブ名'];

// for(CronTrigger ct:ctList){
//     System.abortJob(ct.Id);
// }
