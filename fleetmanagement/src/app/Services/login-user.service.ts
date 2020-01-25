import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IloginUser } from '../Interfaces/iloginUser';
import { Observable } from 'rxjs';
import { IRegisteruser } from '../Interfaces/iregisteruser';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  Url= "http://localhost:8080/computerseekhotest4/";

  constructor(private router: Router,private http : HttpClient) { }

  //Observable<IRegisteruser>
  Login(user : IloginUser):boolean
  {
        // return  this.http.post<IRegisteruser>(this.Url+'staff/check',user);        
        return true;
      }

  Form = new FormGroup(
    {
      // Add Multiple validation
      Email: new FormControl('', [Validators.email,Validators.required]),
      Password: new FormControl('', [Validators.required])
      
    }
  )
  
}
