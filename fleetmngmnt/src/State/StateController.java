package State;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.google.gson.Gson;

import fleet.State;


@RestController
@CrossOrigin("http//localhost:4200")
public class StateController 
{
	@Autowired
	StateManager manager;
	
	@GetMapping(value = "crud/states", headers = "Accept=application/json")  
	public String showState()
	{
		return new Gson().toJson(manager.getState());
	}
	
/*	@GetMapping(value = "crud/search/{sid}", headers = "Accept=application/json")  
	 public State getPro(@PathVariable int sid)
	 {
		State p=manager.getState(sid);
		return p;
	 }*/
	
	@PostMapping(value = "crud/stateadd", headers = "Accept=application/json")  
	 public void addpro(@RequestBody State state)
	 {
		System.out.println("add pro called");
		manager.addState(state);
	 }
	
}
