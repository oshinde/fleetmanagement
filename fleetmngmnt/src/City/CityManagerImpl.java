package City;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.City;

@Service
public class CityManagerImpl implements CityManager
{
	@Autowired
	CityDAO dao;

	@Override
	public void addCity(City p) {
		dao.addCity(p);
		
	}

	@Override
	public List<City> getCities() {
		// TODO Auto-generated method stub
		return dao.getCities();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	@Override
	public void update(City city,int id) {
		// TODO Auto-generated method stub
		dao.update(city,id);
		
	}

	/*@Override
	public City getCity(int id) {
		// TODO Auto-generated method stub
		return dao.getCity(id);
	}*/
	
	

}
