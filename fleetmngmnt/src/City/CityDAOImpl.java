package City;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.City;

@Repository
@Transactional
public class CityDAOImpl implements CityDAO
{
	@Autowired
	HibernateTemplate template;

	@Override
	public List<City> getCities()
	{
		List<City>mylist=(List<City>) template.find("from City c");
		return mylist;
	}
	@Override
	public void delete(int id)
	{
		template.delete(template.get(City.class, id));
	}


	@Override
	public void update(City city,int id)
	{
		template.bulkUpdate("update City c set c.city_name=?  where c.id=?",city.getCityname(),id);
		//template.update(template.get(City.class, id));
	}
	



	/*@Override
	public City getCity(int id)
	{
		City temp=(City)template.find("from City c where c.id=?",id).get(0);
		return temp;
	}*/
	@Override
	public void addCity(City c) {
		template.save(c);
		
	}
}
