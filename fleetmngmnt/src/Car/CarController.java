package Car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fleet.Car;

@RestController
@CrossOrigin(origins="*")
public class CarController 
{

	@Autowired
	CarManager manager;
	
	@GetMapping(value = "fleet/car",headers = "Accept=application/json")  
	 public String showcars()
	 {
		  return new Gson().toJson(manager.getCars());
	 }
	@GetMapping(value = "fleet/search/{cid}", headers = "Accept=application/json")  
	 public Car getcars(@PathVariable int cid)
	 {
		Car c = manager.getCars(cid);
		return c;
	 }
	
	
	
	

}
