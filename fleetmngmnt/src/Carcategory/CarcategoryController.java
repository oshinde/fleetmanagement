
package Carcategory;

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

import fleet.Carcategory;


@RestController  
@CrossOrigin(origins="*")
public class CarcategoryController
{
	@Autowired
	CarcategoryManager manager;
	@GetMapping(value = "crud/types",headers = "Accept=application/json")  
	 public String showCarcategory()
	 {
		  return new Gson().toJson(manager.gettypes());
	 }
      
       /*  @GetMapping(value = "crud/search/{ccid}", headers = "Accept=application/json")  
	 public Carcategory getCarcategory(@PathVariable int cid)
	 {
		Carcategory cc=manager.getCarcategory(cid);
		return cc;
	 }
*/
	 @GetMapping(value = "crud/search/{type}", headers = "Accept=application/json")  
	 public Carcategory getCarcategory(@PathVariable String type)
	 {
		Carcategory cc=manager.getCarcategory(type);
		return cc;
	 }
	

	

@DeleteMapping(value = "crud/delete/{ccid}", headers = "Accept=application/json")  
	 public void removecategory(@PathVariable int cid)
	 {
		manager.delete(cid);
	 }
	




@PutMapping(value = "crud/update/{ccid}",headers = "Accept=application/json")  
	 public void updatecategory(@RequestBody Carcategory category,@PathVariable int cid)
	 {
		manager.update(category,cid);
	 }
	


@PostMapping(value = "crud/addcategory", headers = "Accept=application/json")  
	 public void addcategory(@RequestBody Carcategory category)
	 {
		System.out.println("addcategory called");
		manager.addCarcategory(category);
	 }
}
