package State;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.hibernate.sql.Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import fleet.State;

@EnableTransactionManagement
@Repository
@Transactional
public class StateDaoImpl implements StateDao
{
	@Autowired
	HibernateTemplate template;

	@Override
	public void addState(State st) 
	{
		
		template.save(st);
	}

	@Override
	public List<State> getState() 
	{
		@SuppressWarnings("unchecked")
		List<State> lst=(List<State>) template.find("from State");
		return lst;
	}

	

	/*@Override
	public State getState(int id) 
	{
		
		return null;
	}*/

}
