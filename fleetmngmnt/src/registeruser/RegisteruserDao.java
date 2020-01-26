package Registeruser;

import java.util.List;

import fleet.Login;
import fleet.Registeruser;

public interface RegisteruserDao 
{
	
	void addCustomer(Registeruser c);
	List<Registeruser> getCustomers();
	void delete(int id);
	void update(Registeruser customer,int id);
	Registeruser getCustomer(int id);
	public boolean validate(Login l);

}
