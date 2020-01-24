package Billing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Billing;

@Repository
@Transactional
public class BillingDaoImpl implements BillingDao {
	@Autowired
	HibernateTemplate template;

	@Override
	public Billing getBilling(int id) {
		
		Billing bill= (Billing) template.find("from Billing b where b.billid=?", id).get(0);
		
		return bill;
	}

}
