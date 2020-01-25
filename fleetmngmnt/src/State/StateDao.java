package State;

import java.util.List;

import fleet.State;

public interface StateDao
{
	void addState(State st);
	List<State> getState();
	
	//State getState(int id);
}
