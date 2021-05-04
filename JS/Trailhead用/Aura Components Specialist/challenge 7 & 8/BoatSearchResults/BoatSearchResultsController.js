({
	initSearch : function(component, event, helper) {
		helper.onSearch(component);
	},
    
	//* doSearchメソッドを作成、BoatTypeIdを受け取る
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        component.set("v.boatTypeId", params.boatTypeId);
		helper.onSearch(component);
	},
    
	//TODO challenge 5
	//* 選択中boatIdを更新する処理を追加
	onBoatSelect : function(component, event, helper) {
        var boatId = event.getParam('boatId');
        component.set("v.selectedBoatId", boatId);
	}
})