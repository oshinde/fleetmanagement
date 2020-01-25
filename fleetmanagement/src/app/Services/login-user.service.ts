import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private router: Router) { }
  Form = new FormGroup(
    {
      // Add Multiple validation
      Email: new FormControl('', [Validators.email,Validators.required]),
      Password: new FormControl('', [Validators.required])
      
    }
  )
  
}
