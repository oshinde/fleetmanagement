package Amenity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fleet.Amenity;

@RestController
@CrossOrigin(origins="*")
public class AmenityController 
{
	@Autowired
	AmenityManager mgr;
	
	@PostMapping(value="crud/insert",headers="Accept=application/json")
	public void addAmenity(@RequestBody Amenity amenity)
	{
		System.out.println("data added");
		mgr.addamenity(amenity);
	}
	
	@GetMapping(value="crud/show",headers="Accept=application/json")
	public String showAmenity()
	{
		return new Gson().toJson(mgr.getAmenity());
	}
}
