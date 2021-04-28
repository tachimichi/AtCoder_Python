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
        // component.find("service").reloadRecord();
        // TODO challenge 8
        //* onRecordUpdatedメソッドとonBoatReviewAddedメソッド内で
        //* BoatReviewコンポーネントをを取得し、リフレッシュをかける
        
        component.find("service").reloadRecord();
        var boatReviewsCmp = component.find("boatReviewsCmp");
        if(boatReviewsCmp){
            boatReviewsCmp.refresh();
        }
	},
    
    // TODO challenge 7
    //* タブの選択状態を変える
    onBoatReviewAdded : function(component, event, helper) {

        // TODO challenge 8
        //* onRecordUpdatedメソッドとonBoatReviewAddedメソッド内で
        //* BoatReviewコンポーネントをを取得し、リフレッシュをかける
        
        component.find("tabSet").set('v.selectedTabId', 'boatreviewtab');
        var boatReviewsCmp = component.find("boatReviewsCmp");
        if(boatReviewsCmp){
            boatReviewsCmp.refresh();
        }
	}

})