package Car;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Car;

@Repository
@Transactional
public class CarDaoImpl implements CarDao{

	@Autowired
	HibernateTemplate template;
	@Override
	public List<Car> getCars() {
		
	
		List<Car> mylist=(List<Car>) template.find("from Car p");
		return mylist;
	}

	@Override
	public Car getCars(int id) {
		
		Car temp= (Car) template.find("from Car c where c.carid=? and c.availibility=\"yes\"",id).get(0);
		return temp;
	}

}
