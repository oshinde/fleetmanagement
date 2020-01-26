import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IloginUser } from '../Interfaces/iloginUser';
import { Observable, Subject } from 'rxjs';
import { IRegisteruser } from '../Interfaces/iregisteruser';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  myVar:any;
  Url= "http://localhost:8080/fleetmngmnt/";
  public loginEvent = new Subject<string>();

  constructor(private router: Router,private http : HttpClient) { }
  getLoginEvent()
  {
    return this.loginEvent;
  }
  setLoginEvent(val:string)
  {
    this.loginEvent.next(val);
  }
  
  Login(user : IloginUser):Observable<IRegisteruser>
  {
    console.log(user);
    
       //  return  this.http.post<IRegisteruser>(this.Url+'Login/validate',user);  
         return  this.http.post<IRegisteruser>(this.Url+'Login/validate',user);        
  }
  // getLogin():Observable<any>
  // {

  //   return  this.http.get(this.Url+'Login/validate');
  // }

  Form = new FormGroup(
    {
      // Add Multiple validation
      Email: new FormControl('', [Validators.email,Validators.required]),
      Password: new FormControl('', [Validators.required])
      
    }
  )
  
}
