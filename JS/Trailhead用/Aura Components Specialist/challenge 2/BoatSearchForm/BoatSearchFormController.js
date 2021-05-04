({
    //* ロード時にアクションでBoatTypeを取得して、選択リストに反映
    initBoatSearchForm : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        if (createRecordEvent){
            component.set("v.showNewButton", true);
        }
        
        helper.initBoatTypes(component);
    },
    
    createNewBoat : function(component, event, helper) {
        
        //* コンポーネントで表示された値から、情報を取得する
        var boatTypeId = component.find("boatTypeSelect").get("v.value");
        //* 変数とAPI名オブジェクトを結びつけるオブジェクトを作成
        var params = {"entityApiName": "Boat__c"};
        //* 取得できた場合
        if(boatTypeId){
            //*パラメータの項目値として格納
            params.defaultFieldValues = {"BoatType__c" : boatTypeId};
        }
        
        var createBoatRecordEvent = $A.get("e.force:createRecord");
        createBoatRecordEvent.setParams(params);
        //* 作成するイベントにセットして発火
        createAcountContactEvent.fire();
        
    }
    
    
})