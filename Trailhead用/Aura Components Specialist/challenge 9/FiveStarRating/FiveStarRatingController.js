({ // TODO challenge 9
    //* 新規作成

    afterScriptsLoaded : function(component, event, helper) {
        //* DOM要素を取得する
        var domEl = component.find("ratingarea").getElement();
        //* valueのアトリビュートを取得する
        var currentRating = component.get("v.value"); 
        //* 編集可否について、アトリビュートを取得する
        var readOnly = component.get("v.readonly"); 
        var maxRating = 5;
        

        var callback = function(rating) {
            component.set('v.value', rating);
        }
        
        component.ratingObj = rating(domEl, currentRating, maxRating, callback, readOnly); 
    },
    
    //* 評価を更新する
    onValueChange: function(component,event,helper) {
        if (component.ratingObj) {
            var value = component.get('v.value');
            component.ratingObj.setRating(value,false);
        }
    }
})