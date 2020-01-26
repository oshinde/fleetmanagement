package Billing;

import fleet.Billing;
import fleet.Booking;

public interface BillingDao 
{
    void update(Billing b,int id);
	Billing getBilling(int id);
	void addBilling(Billing b);
	
	public int calculate(Billing b,int id);
}
