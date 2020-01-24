package Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Employee;

@Repository
@Transactional
public class EmployeeDaoImpl implements EmployeeDao
{

	@Autowired
	HibernateTemplate template;
	
	@Override
	public List<Employee> getEmployees() 
	{
		
		
		@SuppressWarnings("unchecked")
		List<Employee> mylist=(List<Employee>)template.find("from Employee e");
		return mylist;
	}
	
	@Override
	public Employee getEmployee(int id)
	{
		Employee temp=(Employee)template.find("from Employee e where e.empid=?",id).get(0);
		return temp;
	}

}
