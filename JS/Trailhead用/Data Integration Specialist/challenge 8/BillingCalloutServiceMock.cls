@isTest
global class BillingCalloutServiceMock implements WebServiceMock {
    // Test Web Service Callouts - Specify a Mock Response for Callouts
    // https://trailhead.salesforce.com/en/content/learn/modules/apex_integration_services/apex_integration_soap_callouts
    global void doInvoke(
                                    Object stub,
                                    Object request,
                                    Map<String, Object> response,
                                    String endpoint,
                                    String soapAction,
                                    String requestName,
                                    String responseNS,
                                    String responseName,
                                    String responseType
                                ) {
        // start - specify the response you want to send
        BillingServiceProxy.billProjectResponse_element response_x = 
                                        new BillingServiceProxy.billProjectResponse_element();
        response_x.status = '200';
        // response_x.status = 'OK';
        // end
        response.put('response_x', response_x);
    }
}