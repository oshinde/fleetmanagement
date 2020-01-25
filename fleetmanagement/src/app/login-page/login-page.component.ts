import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginUserService } from '../Services/login-user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  submitted:boolean;


 

  constructor(public login:LoginUserService) {}
  formControls= this.login.Form.controls;

  onSubmit()
  {
    this.submitted=true;
    if(this.login.Form.valid)
    {
      
      this.submitted=false;
    }
    
    
    
  }
    
  
 
  ngOnInit() {
 
  }

}
