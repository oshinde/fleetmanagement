package fleet;

public class Login {
	private String useremailid;
	private String userpassword;
	
	public String getUseremailid() {
		return useremailid;
	}
	public void setUseremailid(String useremailid) {
		this.useremailid = useremailid;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	
	@Override
	public String toString() {
		return "Login [useremailid=" + useremailid + ", userpassword=" + userpassword + "]";
	}

	
}
