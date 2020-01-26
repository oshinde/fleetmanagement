package Hub;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Hub;

@Repository
@Transactional
public class HubDAOImpl implements HubDAO
{
	@Autowired
	HibernateTemplate template;

	@Override
	public List<Hub> getHubs()
	{
		List<Hub>mylist=(List<Hub>) template.find("from Hub h");
		return mylist;
	}
	@Override
	public void delete(int id)
	{
		template.delete(template.get(Hub.class, id));
	}


	/*@Override
	public void update(Hub hub,int id)
	{
		template.bulkUpdate("update Hub h set h.hub_name=?  where h.id=?",hub.getHubname(),id);
		//template.update(template.get(Hub.class, id));
	}
	*/



	/*@Override
	public Hub getHub(int id)
	{
		Hub temp=(Hub)template.find("from Hub h where h.id=?",id).get(0);
		return temp;
	}*/
	@Override
	public void addHub(Hub h) {
		template.save(h);
		
	}
}
