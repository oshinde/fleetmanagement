import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StatedataService } from '../Services/statedata.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 
  constructor(private _userserv:StatedataService) { }
  isChecked:boolean = false;
  rental: Date = new Date();
  return: Date = new Date();
  states=[];
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
    this._userserv.getStates().subscribe(data=>this.states=data);
    console.log(this.states);
  }

}
