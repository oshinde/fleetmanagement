package Billing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fleet.Billing;
import fleet.Registeruser;


@RestController  
@CrossOrigin(origins="*")
public class BillingController 
{
	@Autowired
	BillingManager manager;
	
	
	@GetMapping(value = "billing/search/{bid}", headers = "Accept=application/json")  
	 public Billing getBilling(@PathVariable int bid)
	 {
		Billing b=manager.getBilling(bid);
		System.out.println(b);
		return b;
		
		
	 }

	
	@PostMapping(value = "billing/add", headers = "Accept=application/json")  
	 public void addpro(@RequestBody Billing b)
	 {
		System.out.println("customer called");
		manager.addBilling(b);
	 }
	
	@PutMapping(value = "billing/update/{id}",headers = "Accept=application/json")  
	 public void updatepro(@RequestBody Billing b,@PathVariable int id)
	 {
		manager.update(b,id);
	 }
	
	@PostMapping(value = "billing/billdate/{id}", headers = "Accept=application/json")
	
	public void bill(@RequestBody Billing b,@PathVariable int id)
	 {
		manager.calculate(b,id);
		//System.out.println("customer called");
		//manager.addBilling(b);
	 }

	
	
}
