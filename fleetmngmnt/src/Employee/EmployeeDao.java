package Employee;

import java.util.List;

import fleet.Employee;

public interface EmployeeDao 
{

	List<Employee>getEmployees();

	Employee getEmployee(int id);
}
