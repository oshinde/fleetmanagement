package Hub;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Hub;

@Service
public class HubManagerImpl implements HubManager
{
	@Autowired
	HubDAO dao;

	@Override
	public void addHub(Hub h) {
		dao.addHub(h);
		
	}

	@Override
	public List<Hub> getHubs() {
		// TODO Auto-generated method stub
		return dao.getHubs();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	/*@Override
	public void update(Hub hub,int id) {
		// TODO Auto-generated method stub
		dao.update(hub,id);
		
	}*/

	/*@Override
	public Hub getHub(int id) {
		// TODO Auto-generated method stub
		return dao.getHub(id);
	}*/
	
	

}
