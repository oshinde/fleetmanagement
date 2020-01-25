package City;

import java.util.List;

import fleet.City;

public interface CityManager
{
	void addCity(City c);
	List<City> getCities();
	void delete(int id);
	void update(City city,int id);
	//City getCity(int id);
}
