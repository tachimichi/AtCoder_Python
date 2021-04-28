({
    // TODO challenge 7
    //* 新規作成
    
    // TODO challenge 7
    //* doInitメソッド作成（ヘルパーのonInitを呼び出す）
	doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
	},
    
    onRecordUpdated : function(component, event, helper) {
        
        var showToastEvent = $A.get("e.force:showToast");
        if (showToastEvent) {
            showToastEvent.setParams({
                "title" : "Updated",
                "message" : "The record has been updated.",
                "type" : "success" 
            });
            showToastEvent.fire();
        } 
        else {
            alert(params.Message);
        }
	},
    
    
    // TODO challenge 7
    //* onSaveメソッド (BoatReviewAddedイベントを送信）
    onSave : function(component, event, helper) {
        // * コンポーネントに表示されているボードのIDを取得
		var boatId = component.get("v.boat").Id;
        //* 更新する
        component.set("v.boatReview.Boat__c", boatId);
        
		var service = component.find("service");
        
        service.saveRecord(function (saveResult) {
            //* エラー発生時の処理
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                
                var showToastEvent = $A.get("e.force:showToast");
                if (showToastEvent) {
                    showToastEvent.setParams({
                        "title" : "Saved",
                        "message" : "The record has been saved.",
                        "type" : "success" 
                    });
                    showToastEvent.fire();
                } 
                else {
                    alert(params.Message);
                }
                
                // TODO challenge 7
                //* BoatReviewAddedイベントの送信
                var reviewAddedEvent = component.getEvent("boatReviewAdded");
                reviewAddedEvent.fire();
                
                helper.onInit(component, event, helper); 
            } 
            else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } 
            else if (saveResult.state === "ERROR") {
                console.log('Problem saving review, error: ' + JSON.stringify(saveResult.error));
            } 
            else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
            
        });
	}
    
    
})