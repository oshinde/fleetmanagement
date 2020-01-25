package Billing;

import fleet.Billing;
import fleet.Booking;

public interface BillingManager
{

	Billing getBilling(int id);
	void addBilling(Billing b);
	void update(Billing b,int id);
	public int calculate(Billing b,int id);
}
