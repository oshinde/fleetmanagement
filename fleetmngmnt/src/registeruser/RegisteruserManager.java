package registeruser;
import fleet.Registeruser;
import java.util.*;

public interface RegisteruserManager 
{
	void addCustomer(Registeruser c);
	List<Registeruser> getCustomers();
	void delete(int id);
	void update(Registeruser customer,int id);
	Registeruser getCustomer(int id);

}
