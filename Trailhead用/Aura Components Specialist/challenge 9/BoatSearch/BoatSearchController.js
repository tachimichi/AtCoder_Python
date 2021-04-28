({
	onFormSubmit : function(component, event, helper) {

        //* eventからデータを引っ張る
		var data = event.getParam("formData");
        
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if (boatSearchResultsCmp) {
            boatSearchResultsCmp.search(data.boatTypeId);
        }
	}
})