package City;

import java.util.List;

import fleet.City;

public interface CityDAO
{
	void addCity(City c);
	List<City> getCities();
	void delete(int id);
	void update(City product,int id);
	//City getCity(int id);
}
