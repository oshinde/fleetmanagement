package Registeruser;

import java.util.*;

import fleet.Login;
import fleet.Registeruser;

public interface RegisteruserManager 
{
	void addCustomer(Registeruser c);
	List<Registeruser> getCustomers();
	void delete(int id);
	void update(Registeruser customer,int id);
	Registeruser getCustomer(int id);
	public boolean validate(Login l);

}
