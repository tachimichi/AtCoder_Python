public class ProjectCalloutService {
    
    //* プロセスビルダーから呼ばれるためのpostOpportunityToPMSメソッド
    //* @InvocableMethod = フローやプロセスビルダーから呼ぶことが可能
    @InvocableMethod(label='PostOpportunityToPMS')
	public static void PostOpportunityToPMS(List<Id> oppIdList) {
        //* 商談を取得し、QueueablePMSCallジョブを起動
        List<Opportunity> oppList = [
                                                Select id, Name, Account.Name, closeDate, Amount, StageName
                                                From Opportunity
                                                Where ID IN :oppIdList
                                                ];
        System.debug(oppList);
        
        ID jobID = System.enqueueJob(new QueueablePMSCall(oppList));
    }
    
    //* 内部で実行するための非同期ジョブQueueablePMSCallクラス（内部クラス）
    //* 非同期ジョブであるQueueableだけでなく、コールアウトを要するため、Database.AllowsCalloutsインタフェースも記述必要
    private class QueueablePMSCall implements Queueable, Database.AllowsCallouts {
        private List<Opportunity> oppList;
        private String token;
        
        private QueueablePMSCall(List oppData) {
            oppList = oppData;
            
            // // TODO カスタム設定ServiceTokensからトークン取得
            token = ServiceTokens__c.getValues('ProjectServiceToken').Token__c;
        }
        
        //* -----------------------------------------------------------
        
        public void execute(QueueableContext context) {

            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setMethod('POST');
            
            // // TODO Named Credentialで作成したProjectServiceを使用する
            req.setEndpoint('callout:ProjectService');
            
            //* 取得したトークンをセット
            String authorizationHeader = 'Bearer ' + token;
            req.setHeader('Authorization', authorizationHeader);
            req.setHeader('Content-Type', 'application/json');
            
            //* POSTするJSONを作成
            String json = '';
            for(Opportunity opp : oppList) {
                json += createJson(opp);
            }
            
            //* リクエスト送信
            req.setBody(json);
            HttpResponse res = http.send(req);
            
            // TODO ステータスコードに応じてStageNameを更新する
            //* If the request is successful, update stage name
            if (res.getStatusCode() == 200) {
                this.opp.StageName = 'Submitted Project';
            } else {
                this.opp.StageName = 'Resubmit Project';
            }
            update this.opp;
        }
        
        //* POSTするJSONを作成
        private String createJson(Opportunity opp) {
            String json = '{';
                json += '"opportunityId": "' + opp.id + '",';
                // // TODO 以下、サンプルを参考に作成する
                json += '"opportunityName": "' + opp.Name + '",';
                json += '"accountName": "' + opp.Account.Name + '",';
                json += '"closeDate": "' + opp.CloseDate + '",';
                json += '"amount": "' + opp.Amount + '",';
            json += '}';
            return json;
        }
    }
}
