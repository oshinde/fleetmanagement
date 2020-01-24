package Billing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Billing;

@Service
public class BillingManagerImpl implements BillingManager
{
	@Autowired
	BillingDao dao;

	@Override
	public Billing getBilling(int id) {
		
		return dao.getBilling(id);
	}
	
	
	
	
	
	
}
