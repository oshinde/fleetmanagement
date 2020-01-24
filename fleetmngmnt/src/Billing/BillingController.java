package Billing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fleet.Billing;


@RestController  
@CrossOrigin("http://localhost:4200")
public class BillingController 
{
	@Autowired
	BillingManager manager;
	
	
	@GetMapping(value = "billing/search/{bid}", headers = "Accept=application/json")  
	 public Billing getBilling(@PathVariable int bid)
	 {
		Billing b=manager.getBilling(bid);
		return b;
	 }

}
