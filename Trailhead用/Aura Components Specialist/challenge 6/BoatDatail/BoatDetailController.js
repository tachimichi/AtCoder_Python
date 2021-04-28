({
    //TODO challenge 6

    //* 初期表示
	init : function(component, event, helper) {
        var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        //* もし情報取得できたなら
        if (redirectToSObjectPageEvent) {
            //* detailボタンを表示する
            component.set("v.showDetailsButton", true);
        }
	},
    
    //TODO レコードの詳細ページを表示
    onFullDetails : function(component, event, helper) {
        //* 詳細ページに移動するための関数
		var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        var boat = component.get("v.boat");
        //* ボート情報をセットして、イベントを送信
        if(boat){
            redirectToSObjectPageEvent.setParams({
                "recordId" : boat.Id
            }); 
            redirectToSObjectPageEvent.fire();
        }
	}
    
})