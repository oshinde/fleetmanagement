package City;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fleet.City;
import City.CityManager;

@RestController  
@CrossOrigin(origins="*")
public class CityController
{
	@Autowired
	CityManager manager;
	@GetMapping(value = "crud/cities",headers = "Accept=application/json")  
	 public String showCity()
	 {
		System.out.println("inside showCity");
		  return new Gson().toJson(manager.getCities());
	 }
      
        /* @GetMapping(value = "crud/search/{cid}", headers = "Accept=application/json")  
	 public City getCity(@PathVariable int cid)
	 {
		City c=manager.getCity(cid);
		return c;
	 }*/


	

@DeleteMapping(value = "crud/delete/{cid}", headers = "Accept=application/json")  
	 public void removecity(@PathVariable int cid)
	 {
		manager.delete(cid);
	 }
	




@PutMapping(value = "crud/update/{cid}",headers = "Accept=application/json")  
	 public void updatecity(@RequestBody City city,@PathVariable int cid)
	 {
		manager.update(city,cid);
	 }
	


@PostMapping(value = "crud/add", headers = "Accept=application/json")  
	 public void addcity(@RequestBody City city)
	 {
		System.out.println("addcity called");
		manager.addCity(city);
	 }
}
