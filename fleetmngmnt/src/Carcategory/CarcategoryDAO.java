package Carcategory;

import java.util.List;

import fleet.Carcategory;

public interface CarcategoryDAO
{
	void addCarcategory(Carcategory cc);
	List<Carcategory> gettypes();
	void delete(int id);
	void update(Carcategory category,int id);
	Carcategory getCarcategory(String type);
}
