package Employee;

import java.util.List;

import fleet.Employee;

public interface EmployeeManager 
{

	List<Employee>getEmployees();
	Employee getEmployee(int id);
}
