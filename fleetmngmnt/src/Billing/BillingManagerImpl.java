package Billing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Billing;
import fleet.Booking;

@Service
public class BillingManagerImpl implements BillingManager
{
	@Autowired
	BillingDao dao;

	@Override
	public Billing getBilling(int id) {
		
		return dao.getBilling(id);
	}

	@Override
	public void addBilling(Billing b) {
		dao.addBilling(b);
		
	}

	@Override
	public void update(Billing b, int id) {
		dao.update(b,id);
		
	}

	@Override
	public int calculate(Billing b,int id) 
	{
		int total=dao.calculate(b,id);
		return total;
		
		
	}
	
	
	
	
	
	
}
