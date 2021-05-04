({ // TODO challenge 8
    //* onInitメソッドの作成
    //* ApexのBoatReviewsクラスの中のgetAllメソッドを呼び出す
	onInit : function(component, event, helper) {

        //* getAllメソッドの引数を指定する
        var action = component.get("c.getAll");
        action.setParams({
            "boatId" : component.get("v.boat").Id
        });
        
        //* レスポンスのステータスによって、表示する内容を変化させる
        action.setCallback(this, function(response) {
			var state = response.getState(); 
            
            if (state === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
            }
            else if (state === "ERROR"){
                console.log(response.getError());
            }
            else{
                console.log(response);
            }
        });
        
        $A.enqueueAction(action);
        
	}
    
})