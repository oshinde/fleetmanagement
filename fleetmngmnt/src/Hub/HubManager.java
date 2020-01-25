package Hub;

import java.util.List;

import fleet.Hub;

public interface HubManager
{
	void addHub(Hub h);
	List<Hub> getHubs();
	void delete(int id);
	/*void update(Hub hub,int id);*/
	//Hub getHub(int id);
}
