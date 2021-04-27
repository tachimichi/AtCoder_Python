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
    
})