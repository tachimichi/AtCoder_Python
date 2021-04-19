
//* Salesforceデータと外部システムの同期
public with sharing class WarehouseCalloutService implements Queueable, Database.AllowsCallouts { 
    
    private static final String WAREHOUSE_URL = 'https://th-superbadge-apex.herokuapp.com/equipment';    


    public static void runWarehouseEquipmentSync() {
        //* 初期設定
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setMethod('GET');
        //* リクエストにエンドポイント(URLの変数)を設定する
        request.setEndpoint(WAREHOUSE_URL);
        //* リクエストで取得した情報をレスポンスとして受け取る
        HttpResponse response = http.send(request);

        //* 情報量が200になったら
        if(response.getStatusCode() == 200) {
            List<Object> jsonResponse = (List<Object>)JSON.deserializeUntyped(response.getBody());
            System.debug('~~ '+jsonResponse);
            //* upsertするための変数作成
            List<Product2> productList = new List<Product2>();
            //* ループ処理(20行目で取得した情報をループ処理)
            for(Object ob : jsonResponse) {
                Map<String,Object> mapJson = (Map<String,Object>)ob;
                Product2 pr = new Product2();

                pr.Name = (String)mapJson.get('name');
                pr.Cost__c = (Decimal) mapJson.get('lifespan');
                pr.Current_Inventory__c = (Double) mapJson.get('quantity');
                pr.Maintenance_Cycle__c = (Integer)mapJson.get('maintenanceperiod');
                pr.Replacement_Part__c = (Boolean)mapJson.get('replacement');
                pr.Lifespan_Months__c = (Integer)mapJson.get('lifespan');
                pr.Warehouse_SKU__c = (String)mapJson.get('sku');
                productList.add(pr);
            }
            //* まとめてupsert
            if(productList.size()>0)
                upsert productList;
        }
    }
    
    public static void execute(QueueableContext context){
        runWarehouseEquipmentSync();
    }
}

//* アノニマスで実行するコード
//* System.enqueueJob(New WarehouseCalloutService());