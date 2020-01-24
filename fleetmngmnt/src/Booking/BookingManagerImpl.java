package Booking;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Booking;

@Service
public class BookingManagerImpl implements BookingManager
{

	@Autowired
	BookingDao dao;
	
	
	@Override
	public void addBooking(Booking b) {
		dao.addBooking(b);
		
	}

	@Override
	public Booking getBooking(int bid) {
		
		return dao.getBooking(bid);
	}
	@Override
	public List<Booking> getBookings() {
	
		
		return dao.getBookings();
	}

}
