({
	//* 選択状態の切り替えと、BoatSelectイベントを送信
	onBoatClick : function(component, event, helper) {
		//* 
        var selectedBoat = component.get("v.boat");
        
        var formsubmit = component.getEvent("boatselect");
        formsubmit.setParams({
            "boatId" : selectedBoat.Id
        });
        
        formsubmit.fire();
		
	}
})