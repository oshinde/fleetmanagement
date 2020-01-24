package Booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fleet.Booking;

@RestController
@CrossOrigin(origins="*")
public class BookingController 
{
	@Autowired
	BookingManager manager;
	
	@GetMapping(value = "booking/search/{bid}", headers = "Accept=application/json")  
	 public Booking getBilling(@PathVariable int bid)
	 {
		Booking  b=manager.getBooking(bid);
		return b;
	 }
	
	@GetMapping(value = "booking/search",headers = "Accept=application/json")  
	 public String showProducts()
	 {
		  return new Gson().toJson(manager.getBookings());
	 }

	@PostMapping(value = "booking/add", headers = "Accept=application/json")  
	 public void addpro(@RequestBody Booking b)
	 {
		
		manager.addBooking(b);
	 }
}
	