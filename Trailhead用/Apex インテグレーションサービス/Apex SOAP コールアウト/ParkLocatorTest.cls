@isTest
private class ParkLocatorTest {
    @isTest static void testCallout() {              
        // This causes a fake response to be generated
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        // Call the method that invokes a callout
        String s = 'japan';
        String[] results = ParkLocator.country(s);
        System.assertEquals(results[0], 'Shiretoko National Park');
    }
}