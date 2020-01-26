import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { BillingService } from '../Services/billing.service';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {

  userForm: FormGroup;
  users: any;
  
  constructor(private _userserv:BillingService,private _userCode: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
   
    
  }
  
}
