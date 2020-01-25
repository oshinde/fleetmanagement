package Billing;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import org.joda.time.DateTime;
import org.joda.time.Days;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Billing;
import fleet.Booking;

@Repository
@Transactional
public class BillingDaoImpl implements BillingDao {
	@Autowired
	HibernateTemplate template;

	@Override
	public Billing getBilling(int id) {
		
		Billing bill= (Billing) template.find("from Billing b where b.billid=?", id).get(0);
		System.out.println(bill.getEnddate());
		return bill;
	}

	@Override
	public void addBilling(Billing b) {
		
		template.save(b);
		
	}

	@Override
	public void update(Billing b, int id) {
		template.bulkUpdate("update Billing b set b.enddate=?,b.totalbill=? where b.id=?",b.getEnddate(),b.getTotalbill(),id);
		
	}

	public int calculate(Billing b,int id)  {
		Double Total;
		Date d1=null,d2=null;
		@SuppressWarnings("unchecked")
		List <Billing> list=(List<Billing>) template.find("select b.startdate,b.enddate,b.amenitiesname,b.amenitiesrate from Billing b where b.id=?",b.getBillid()).get(0);
		
		
		if(list!=null)
		{
			//Iterator<Billing> bill=list.iterator();
			
			//while(bill.hasNext())
			//{
			
				SimpleDateFormat sdate=new SimpleDateFormat("DD/MM/YYYY",Locale.ENGLISH); 
				
				
				
				String s="b.getStartdate()";
				String e="b.getEnddate()";
				try {
					d1=sdate.parse(s);
					d2=sdate.parse(e);
					
					DateTime dt1 = new DateTime(d1);
					DateTime dt2 = new DateTime(d2);

					System.out.print(Days.daysBetween(dt1, dt2).getDays() + " days, ");
				} catch (Exception e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				Long arate=b.getAmenitiesrate();
				String aname=b.getAmenitiesname();
				
				
				
				
			//}
			
		}
		else
		{
			System.out.println("list is empty");
		}
		
		return 0;
	}



}
