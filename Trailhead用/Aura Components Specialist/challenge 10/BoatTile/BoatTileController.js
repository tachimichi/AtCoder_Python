({
    //TODO challenge 5
	//* 選択状態の切り替えと、BoatSelectイベントを送信
	onBoatClick : function(component, event, helper) {
		//* 選択中のボートの情報を取得
        var selectedBoat = component.get("v.boat");
        
        //TODO challenge 6
        //* ボートを選んだ時のイベントを送信する処理を追加
        var boatselect = component.getEvent("boatselect");
        boatselect.setParams({
            "boatId" : selectedBoat.Id
        });
        boatselect.fire();
        
        //TODO challenge 6
        //* BoatSelectedイベントを送信する処理を追加
        var boatselected = $A.get("e.c:BoatSelected");
        boatselected.setParams({
            "boat" : selectedBoat
        });
        boatselected.fire();
        
        //TODO challenge 10
        //* PlotMapMarkerイベントを送信、引数の情報はBoatレコードから取得
        debugger;
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams({
            "sObjectId" : selectedBoat.Id,
            "lat" : selectedBoat.Geolocation__Latitude__s,
            "long" : selectedBoat.Geolocation__Longitude__s,
            "label" : selectedBoat.Name
        });
        plotMapMarkerEvent.fire();

    }
})