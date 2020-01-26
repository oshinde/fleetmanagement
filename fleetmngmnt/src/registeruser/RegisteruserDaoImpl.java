package Registeruser;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Login;
import fleet.Registeruser;

@Repository
@Transactional

public class RegisteruserDaoImpl implements RegisteruserDao
{
	
	@Autowired
	HibernateTemplate template;
	
	@Override
	public void addCustomer(Registeruser c) {
		
		template.save(c);
	}

	@Override
	public List<Registeruser> getCustomers() {
		
		
		@SuppressWarnings("unchecked")
		List<Registeruser> mylist=(List<Registeruser>) template.find("from Registeruser r");
		return mylist;
	}

	@Override
	public void delete(int id) {
		
		template.delete(template.get(Registeruser.class, id));
	}

	@Override
	public void update(Registeruser r, int id) {
	
		template.bulkUpdate("update Registeruser r1 set r1.userpassword=?,r1. userfirstname=?,r1.userlastname=?,r1.useraddress1=?,r1.useremailid=?,r1.userdrivinglicenceno=?,r1.userpassportno=?,r1.userphoneno=?,r1.useraadharno=?,r1.userdob=? where r1.userid=?",
				            r.getUserpassword(),r.getUserfirstname(),r.getUserlastname(),r.getUseraddress1(),r.getUseremailid(),r.getUserdrivinglicenceno(),r.getUserpassportno(),r.getUserphoneno(),r.getUseraadharno(),r.getUserdob(),id);
		
	}

	@Override
	public Registeruser getCustomer(int id) {
		Registeruser temp =(Registeruser) template.find("from Registeruser r where r. userid=?",id ).get(0);
		
		return temp;
	}

	@Override
	public boolean validate(Login l) {
		//List<Login> list=(List<Login>) template.find("from Registeruser r where r.useremailid.equals(l.useremailid)=? and r.userpassword.equals(l.userpassword)=?",l.getUseremailid(),l.getUserpassword()).get(0);
		@SuppressWarnings("unchecked")
		List<Registeruser> list=(List<Registeruser>) template.find("from Registeruser r");
		Iterator<Registeruser>itr=list.iterator();
		int flag=1;
		while(itr.hasNext())
		{
			Registeruser ref=itr.next();
			if(ref.getUseremailid().equalsIgnoreCase(l.getUseremailid())&& ref.getUserpassword().equals(l.getUserpassword()))
					{
						flag=2;
						break;
					}
			else
			{
				flag=1;
			}
		}
		if(flag==1)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}
