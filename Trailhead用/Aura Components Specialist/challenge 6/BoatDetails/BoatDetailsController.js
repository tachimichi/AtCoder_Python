({
    //TODO challenge 6
    //* 新規作成
    
    //TODO challenge 6
    //* boatIDをイベントの引数から取得して更新する
	onBoatSelected : function(component, event, helper) {
        var boat = event.getParam('boat');
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();
	},
    
    //TODO challenge 6
    //* challenge 6 では処理は未記述
    onRecordUpdated : function(component, event, helper) {
        component.find("service").reloadRecord();
	}
})