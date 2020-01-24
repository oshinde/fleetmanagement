package Carcategory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fleet.Carcategory;

@Service
public class CarcategoryManagerImpl implements CarcategoryManager
{
	@Autowired
	CarcategoryDAO dao;

	@Override
	public void addCarcategory(Carcategory cc) {
		dao.addCarcategory(cc);
		
	}

	@Override
	public List<Carcategory> gettypes() {
		// TODO Auto-generated method stub
		return dao.gettypes();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	@Override
	public void update(Carcategory category,int id) {
		// TODO Auto-generated method stub
		dao.update(category,id);
		
	}

	@Override
	public Carcategory getCarcategory(String type) {
		// TODO Auto-generated method stub
		return dao.getCarcategory(type);
	}
	
	

}
