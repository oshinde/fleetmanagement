import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 
  constructor() { }
  isChecked:boolean = false;
  rental: Date = new Date();
  return: Date = new Date();
  states=['Maharashtra','Telangana','Andra Pradesh','Punjab'];
  homePage=new FormGroup({
    RentalDate:new FormControl('',[Validators.required]),
    ReturnDate:new FormControl('',[Validators.required]),
    AirportCodeRental:new FormControl('',[Validators.required]),
    RentalState:new FormControl('',[Validators.required]),
    RentalCity:new FormControl('',[Validators.required]),
    AirportCodeReturn:new FormControl('',[Validators.required]),
    ReturnState:new FormControl('',[Validators.required]),
    ReturnCity:new FormControl('',[Validators.required]),
    
  });

  ngOnInit() {
  }

}
