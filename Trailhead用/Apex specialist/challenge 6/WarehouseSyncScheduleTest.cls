@isTest
private class WarehouseSyncScheduleTest {
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    @TestSetup
    static void makeData(){
        List<CronTrigger> scheduledJobs = [SELECT Id FROM CronTrigger];
        for(CronTrigger job : scheduledJobs){
            System.abortJob(job.Id);
        }
    }
    @isTest
    private static void positive(){
        Test.setMock(HttpCalloutMock.class, new WarehouseCalloutServiceMock());
        Test.startTest();
        try{
            String jobId = System.schedule('WarehouseSyncScheduleJob',CRON_EXP, new WarehouseSyncSchedule());
        }catch(Exception e){
            System.assert(e.getMessage().contains('The Apex job named "WarehouseSyncScheduleJob" is already scheduled for execution.'));
        }
        Test.stopTest();
    }
}