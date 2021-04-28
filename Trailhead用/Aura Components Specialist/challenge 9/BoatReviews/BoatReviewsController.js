
({ // TODO challenge 8
    //* doInitを作成して、helperのonInitを呼び出す
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
    
    //* onUserInfoClick
    //* data-userIDアトリビュート（属性）から、レビューした人のユーザIDを取得
    //* ユーザ情報画面へ遷移する
    onUserInfoClick : function(component, event, helper) {
		var dataUserId = event.target.getAttribute("data-userid");
        var redirectToUserEvent = $A.get("e.force:navigateToSObject");
        if (redirectToUserEvent) {
            redirectToUserEvent.setParams({
                "recordId": dataUserId
            });
            redirectToUserEvent.fire();
        }
	}
    
})