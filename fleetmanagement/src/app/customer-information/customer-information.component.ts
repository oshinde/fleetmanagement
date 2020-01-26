import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../Services/login-user.service';
import { Router } from '@angular/router';
import { IloginUser } from '../Interfaces/iloginUser';
import { IRegisteruser } from '../Interfaces/iregisteruser';
import { loginUser } from '../Classes/loginUser';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {
  submitted:boolean;
  user:IloginUser;
  usr:IRegisteruser;
  success: void;

 

  constructor(public login:LoginUserService,public router:Router) {}
  formControls= this.login.Form.controls;

  onSubmit()
  {
    this.submitted=true;
    if(this.login.Form.valid)
    {
      
      this.submitted=false;
    }
    
    
    
  }
    
  ngOnInit() {}


// checkUser()
// {
//   this.login.getLogin().subscribe((data)=>{this.success=data})
//   console.log(this.success);
  
// }  


getUserDetails()
{



}
  loginUser()
  {
    this.submitted=true;
    if(this.login.Form.valid)
    {
      
      this.submitted=false;
    }

    this.user=new loginUser();
    this.user.useremailid=this.login.Form.controls.Email.value;
    this.user.userpassword=this.login.Form.controls.Password.value;
    console.log(this.user.useremailid);
    console.log(this.user.userpassword);
    var _me  = this;
    //this.login.Login(this.user).then(function(data){console.log(data);});
 
    
    this.login.Login(this.user).then(function(data){
      if(data == true)
      {
        localStorage.setItem("_islogedin_","1");
      _me.login.setLoginEvent("1");

      this.getUserDetails();
        
      }
      else{
        console.log("login failed");
      }
      // if(data != null && data != 0)
      // {
        // localStorage.setItem("_islogedin_","1");
        // _me.login.setLoginEvent("1");
      //   localStorage.setItem("_logedinuser_",JSON.stringify(data));
      //   _me.router.navigate(['homePage']);
      // }
      // else{
      //   console.log("login failed");
      // }
      
    },function(error){
      console.log(error);
    })
   // this.checkUser()
  }
}
