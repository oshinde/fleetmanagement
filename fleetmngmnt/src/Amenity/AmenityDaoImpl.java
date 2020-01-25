package Amenity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fleet.Amenity;

@Repository
@Transactional
public class AmenityDaoImpl implements AmenityDao
{
	@Autowired
	HibernateTemplate template;

	@Override
	public void addamenity(Amenity am) 
	{
		template.save(am);
		
	}

	@Override
	public List<Amenity> getAmenity() 
	{
		List<Amenity> list= (List<Amenity>) template.find("from Amenity am");
 		return list;
	}
	
}
