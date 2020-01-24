package Car;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Car;


@Service
public class CarManagerImpl implements CarManager{
	@Autowired
	CarDao dao;

	@Override
	public List<Car> getCars() {
		
		return dao.getCars();
	}

	@Override
	public Car getCars(int id) {
		
		return dao.getCars(id) ;
	}

}
