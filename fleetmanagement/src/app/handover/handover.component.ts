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
    rent=localStorage.getItem('rentLocation');
    return=localStorage.getItem('returnLocation');
    car=localStorage.getItem('carCategory');
  
  billid:number;
  ngOnInit() {
    this.myGroup = new FormGroup({
      search1: new FormControl(),
      fuserid:new FormControl(),
      ffname:new FormControl(),
      flname:new FormControl(),
      faddr:new FormControl(),
      faadhar:new FormControl(),
      phoneno:new FormControl(),
      fvehicle:new FormControl(),
      fphub:new FormControl(),
      fdhub:new FormControl(),

      });
      
    
  }
  onSubmit() {
    this.userid = this.myGroup.controls.search1.value;
    this._userserv.getBill(this.userid).subscribe(data=>this.users=data);
 }

}
