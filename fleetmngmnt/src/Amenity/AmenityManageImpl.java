package Amenity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Amenity;

@Service
public class AmenityManageImpl implements AmenityManager
{
	@Autowired
	AmenityDao dao;
	
	@Override
	public void addamenity(Amenity am)
	{
		
		dao.addamenity(am);
	}

	@Override
	public List<Amenity> getAmenity() 
	{
		
		return dao.getAmenity();
	}

	
	
}
