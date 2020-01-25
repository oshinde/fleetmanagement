import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BillingService } from '../Services/billing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-handover',
  templateUrl: './handover.component.html',
  styleUrls: ['./handover.component.css']
})

export class HandoverComponent implements OnInit {
  isChecked: boolean = false;
  myGroup: FormGroup;
  users: any;
  userid:any;
  constructor(private _userserv:BillingService,private _userCode: ActivatedRoute,
    private router:Router) { }


  
  billid:number;
  ngOnInit() {
    this.myGroup = new FormGroup({
      search1: new FormControl(),
      fname:new FormControl(),
      });
      
    
  }
  onSubmit() {
    this.userid = this.myGroup.controls.search1.value;
    this._userserv.getBill(this.userid).subscribe(data=>this.users=data);
 }

}
