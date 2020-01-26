import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginUserService } from '../Services/login-user.service';
import { IloginUser } from '../Interfaces/iloginUser';
import { IRegisteruser } from '../Interfaces/iregisteruser';
import { loginUser } from '../Classes/loginUser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  submitted:boolean;
  user:IloginUser;
  usr:IRegisteruser;
  success: void;
  myUser:IRegisteruser;
 

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
 
    var _me  = this;
    //this.login.Login(this.user).then(function(data){console.log(data);});
    
    this.login.Login(this.user).subscribe(
      data =>{
        this.myUser = data;
     
       if(this.myUser==null)
       {
        console.log("login failed");
        
       } 
        else if((this.user.useremailid==this.myUser.useremailid) && (this.user.userpassword==this.myUser.userpassword))
        {
          localStorage.setItem("_islogedin_","1");
          localStorage.setItem("userID",this.myUser.userid);
       _me.login.setLoginEvent("1");
       _me.router.navigate(['homePage']);
          
        }
       
        
      } );
    //  this.login.Login(this.user).then(function(data){
    //   if(data == true)
    //   {
    //    
    //   }
    //   else{
    //     
    //   }


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
      
    // },function(error){
    //   console.log(error);
    // })
   // this.checkUser()
  }

  }

