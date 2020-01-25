package Carcategory;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Carcategory;

@Repository
@Transactional
public class CarcategoryDAOImpl implements CarcategoryDAO
{
	@Autowired
	HibernateTemplate template;

	@Override
	public List<Carcategory> gettypes()
	{
		List<Carcategory>mylist=(List<Carcategory>) template.find("from Carcategory cc");
		return mylist;
	}
	@Override
	public void delete(int id)
	{
		template.delete(template.get(Carcategory.class, id));
	}


	@Override
	public void update(Carcategory category,int id)
	{
		template.bulkUpdate("update Carcategory cc set cc.carcategoryname=?  where cc.carcategoriesid=?",category.getCarcategoryname(),id);
		//template.update(template.get(Carcategory.class, id));
	}
	



	@Override
	public Carcategory getCarcategory(String type)
	{
		Carcategory temp=(Carcategory)template.find("from Carcategory cc where cc.carcategoryname=?",type).get(0);
		return temp;
	}
	@Override
	public void addCarcategory(Carcategory cc) {
		template.save(cc);
		
	}
}
