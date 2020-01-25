package Booking;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Booking;

@Repository
@Transactional
public class BookingDaoImpl implements BookingDao {

	@Autowired
	HibernateTemplate template;
	
	@Override
	public Booking getBooking(int bid) {
		Booking b=(Booking) template.find("from Booking b where b.bookingid=?",bid).get(0);
		return b;
	}
	
	@Override
	public void addBooking(Booking b) {
		// TODO Auto-generated method stub
		template.save(b);
	}
	
	@Override
	public List<Booking> getBookings() {
		List<Booking>mylist=(List<Booking>) template.find("from Booking b");
		return mylist;
		
	}

}
