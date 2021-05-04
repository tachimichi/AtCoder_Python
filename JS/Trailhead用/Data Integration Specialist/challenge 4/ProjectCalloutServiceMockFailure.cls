@isTest
global class ProjectCalloutServiceMockFailure implements HttpCalloutMock {
    // Implement this interface method
    // https://trailhead.salesforce.com/en/content/learn/modules/apex_integration_services/apex_integration_rest_callouts
    global HTTPResponse respond(HTTPRequest request) {
        // Create a fake response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{}');
        response.setStatus('Error');
        response.setStatusCode(500);
        return response; 
    }
}