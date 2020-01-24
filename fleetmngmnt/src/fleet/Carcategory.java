package fleet;
// Generated 20 Jan, 2020 2:21:04 PM by Hibernate Tools 3.2.2.GA

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

/**
 * Carcategory generated by hbm2java
 */
@Entity
@Table(name = "carcategory", catalog = "fleet_management")
public class Carcategory implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int carcategoriesid;
	private Hub hub;
	private String imagepath;
	private String carcategoryname;
	private Long dailyrate;
	private Long weeklyrate;
	private Long monthlyrate;
	private Set<Car> cars = new HashSet<Car>(0);

	public Carcategory() {
	}

	public Carcategory(int carcategoriesid, Hub hub) {
		this.carcategoriesid = carcategoriesid;
		this.hub = hub;
	}

	public Carcategory(int carcategoriesid, Hub hub, String imagepath, String carcategoryname, Long dailyrate,
			Long weeklyrate, Long monthlyrate, Set<Car> cars) {
		this.carcategoriesid = carcategoriesid;
		this.hub = hub;
		this.imagepath = imagepath;
		this.carcategoryname = carcategoryname;
		this.dailyrate = dailyrate;
		this.weeklyrate = weeklyrate;
		this.monthlyrate = monthlyrate;
		this.cars = cars;
	}

	@Id

	@Column(name = "carcategoriesid", unique = true, nullable = false)
	public int getCarcategoriesid() {
		return this.carcategoriesid;
	}

	public void setCarcategoriesid(int carcategoriesid) {
		this.carcategoriesid = carcategoriesid;
	}

	@Transient
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "hubid", nullable = false)
	public Hub getHub() {
		return this.hub;
	}

	public void setHub(Hub hub) {
		this.hub = hub;
	}

	@Column(name = "imagepath", length = 256)
	public String getImagepath() {
		return this.imagepath;
	}

	public void setImagepath(String imagepath) {
		this.imagepath = imagepath;
	}

	@Column(name = "carcategoryname", length = 256)
	public String getCarcategoryname() {
		return this.carcategoryname;
	}

	public void setCarcategoryname(String carcategoryname) {
		this.carcategoryname = carcategoryname;
	}

	@Column(name = "dailyrate", precision = 10, scale = 0)
	public Long getDailyrate() {
		return this.dailyrate;
	}

	public void setDailyrate(Long dailyrate) {
		this.dailyrate = dailyrate;
	}

	@Column(name = "weeklyrate", precision = 10, scale = 0)
	public Long getWeeklyrate() {
		return this.weeklyrate;
	}

	public void setWeeklyrate(Long weeklyrate) {
		this.weeklyrate = weeklyrate;
	}

	@Column(name = "monthlyrate", precision = 10, scale = 0)
	public Long getMonthlyrate() {
		return this.monthlyrate;
	}

	public void setMonthlyrate(Long monthlyrate) {
		this.monthlyrate = monthlyrate;
	}

	@Transient
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "carcategory")
	public Set<Car> getCars() {
		return this.cars;
	}

	public void setCars(Set<Car> cars) {
		this.cars = cars;
	}

}
