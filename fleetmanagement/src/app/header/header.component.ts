import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../Services/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogin:boolean=true;
  constructor(public login:LoginUserService,private router:Router) { }

  ngOnInit() {
    this.login.getLoginEvent().subscribe(x => {
      if(x == "1")
      {
        this.isLogin = true;
      }
      else{
        this.isLogin = false;
      }
    });
    if(localStorage.getItem("_islogedin_") != "1")
    {
      this.isLogin = false;
    }
    else{
      this.isLogin = true;
    }
  }

  OnClick(type)
  {
    if(type=="login")
    {
      this.router.navigate(['userLogin']);
    }
    else{
      localStorage.setItem("_islogedin_","0");
      this.isLogin = false;
    }
  }

}
