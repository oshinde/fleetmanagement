package State;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fleet.State;

@Service
public class StateManagerImpl implements StateManager
{
	@Autowired
	StateDao dao;

	@Override
	@Transactional 
	public void addState(State st) 
	{
		dao.addState(st);
		
	}

	@Override
	public List<State> getState() 
	{
		
		return dao.getState();
	}

	

	/*@Override
	public State getState(int id) 
	{
		
		return dao.getState(id);
	}*/
	
}
