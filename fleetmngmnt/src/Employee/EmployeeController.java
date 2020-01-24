package Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fleet.Employee;

@RestController
@CrossOrigin(origins="*")
public class EmployeeController 
{

	@Autowired
	EmployeeManager manager;
	
	@GetMapping(value="fleet/employeesearch" ,headers ="Accept=application/json")
	public String showemployees()
	{
		return new Gson().toJson(manager.getEmployees());
	}
	
	@GetMapping(value = "crud/Esearch/{id}", headers = "Accept=application/json")  
	 public Employee getEmployee(@PathVariable int id)
	 {
		Employee p=manager.getEmployee(id);
		return p;
	 }
	
	
	
	
	
	
	
	
	
}
