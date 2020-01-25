package Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Employee;

@Service
public class EmployeeManagerImpl implements EmployeeManager
{

	@Autowired
	EmployeeDao dao;

	@Override
	public List<Employee> getEmployees() {
		
		return dao.getEmployees();
	}

	@Override
	public Employee getEmployee(int id) {
		
		return dao.getEmployee(id);
	}
	
}
