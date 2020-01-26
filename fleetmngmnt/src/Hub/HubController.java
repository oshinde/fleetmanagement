package Hub;

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

import fleet.Hub;
import Hub.HubManager;

@RestController  
@CrossOrigin(origins="*")
public class HubController
{
	@Autowired
	HubManager manager;
	@GetMapping(value = "crud/hubs",headers = "Accept=application/json")  
	 public String showHub()
	 {
		  return new Gson().toJson(manager.getHubs());
	 }
      
       /*  @GetMapping(value = "crud/search/{hid}", headers = "Accept=application/json")  
	 public Hub getHub(@PathVariable int hid)
	 {
		Hub h=manager.getHub(hid);
		return h;
	 }*/


	

@DeleteMapping(value = "crud/delete/{hid}", headers = "Accept=application/json")  
	 public void removehub(@PathVariable int hid)
	 {
		manager.delete(hid);
	 }
	




/*@PutMapping(value = "crud/update/{hid}",headers = "Accept=application/json")  
	 public void updatehub(@RequestBody Hub hub,@PathVariable int hid)
	 {
		manager.update(hub,hid);
	 }
	*/


@PostMapping(value = "crud/hubadd", headers = "Accept=application/json")  
	 public void addhub(@RequestBody Hub hub)
	 {
		System.out.println("addhub called");
		manager.addHub(hub);
	 }
}
