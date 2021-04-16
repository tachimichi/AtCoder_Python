public class ParkLocator {
	public static String[] country(String s) {
        
        ParkService.ParksImplPort park  = new ParkService.ParksImplPort();
        return park.byCountry(s);
    }
}