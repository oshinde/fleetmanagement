package Booking;

import java.util.List;

import fleet.Booking;

public interface BookingManager
{
	Booking getBooking(int bid);
	void addBooking(Booking b);
	List<Booking> getBookings();
}
