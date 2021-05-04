public class AnimalLocator {
    
    public static String getAnimalNameById(Integer  Id) {
        // Request
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/' + Id);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        // Get Result
        String result = '';
        if (response.getStatusCode() == 200) {
            Map<String, Object> resultJSON = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            Map<String,Object> animal = (Map<String,Object>) resultJSON.get('animal');
            result = (String)animal.get('name');
        }
        
        return result;
    }
}