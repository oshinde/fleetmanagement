package Car;

import java.util.List;

import fleet.Car;

public interface CarDao 
{


	List<Car>getCars();
	Car getCars(int id);
}
