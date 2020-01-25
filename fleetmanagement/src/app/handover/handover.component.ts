import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-handover',
  templateUrl: './handover.component.html',
  styleUrls: ['./handover.component.css']
})

export class HandoverComponent implements OnInit {
  isChecked: boolean = false;
  myGroup: FormGroup;

  constructor() { }
  billid:number;
  ngOnInit() {
    this.myGroup = new FormGroup({
      search1: new FormControl(),
      fname:new FormControl()
   });
  }
  onSubmit(event: any) {
    this.billid= event.target.billsearch.value;
    console.log(this.billid);
    console.log("hello");
    this.isChecked=!this.isChecked;
    
    
 }

}
