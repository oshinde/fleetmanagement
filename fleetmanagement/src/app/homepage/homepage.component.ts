import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StatedataService } from '../Services/statedata.service';
import { Router } from '@angular/router';
import { IState } from '../Interfaces/istate';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  selectedOrg: any;
  selectedDay: string;
  rentDay: any;
  returnDay: any;


  constructor(private _userserv: StatedataService,private router: Router) { }
  indexRent: number;
  indexReturn:number;

  PStateidRent: number;
  PStateidReturn:number;

  isChecked: boolean = false;

  rental: Date = new Date();
  return: Date = new Date();
  
  
  sidRent: number;
  sidReturn: number;
  cid: number;
  states = [];
  citys: any;
  hubys: any;

  dispCityRental = [];
  dispCityReturn = [];

 
  dispHubRent = [];
  dispHubReturn = [];
  homePage = new FormGroup({
    RentalDate: new FormControl('', [Validators.required]),
    ReturnDate: new FormControl('', [Validators.required]),
    AirportCodeRental: new FormControl('', [Validators.required]),
    RentalState: new FormControl('', [Validators.required]),
    RentalCity: new FormControl('', [Validators.required]),
    AirportCodeReturn: new FormControl('', [Validators.required]),
    ReturnState: new FormControl('', [Validators.required]),
    ReturnCity: new FormControl('', [Validators.required]),

  });

  ngOnInit() {
    this._userserv.getStates().subscribe(data => this.states = data);

  }


setValues()
{
 console.log(this.isChecked);
 
  localStorage.setItem('rentLocation',this.rentDay);
  if(this.isChecked==false)
  {
    localStorage.setItem('returnLocation',this.rentDay);  
  }
  else
  {
    localStorage.setItem('returnLocation',this.returnDay);
  }
  
  this.router.navigate(['confirmPage/301']);

}
hello()
{
  
  console.log(localStorage.getItem('rentLocation'));
  console.log(localStorage.getItem('returnLocation'));

}

setRentLocation(event: any) {
    //update the ui
    this.rentDay = event.target.value;
  }
  setReturnLocation(event: any) {
    //update the ui
    this.returnDay = event.target.value;
  }
  onStateRent(stateid) {
    
    
    this.dispCityRental=[];
    this.sidRent = stateid.target.options[stateid.target.selectedIndex].value;


    this.PStateidRent = this.sidRent;
    console.log("sid of state:" + this.sidRent);
    
    this.citys = this.states.filter(el => {
      console.log(el.stateid);
      return el.stateid == this.sidRent
    }

    )
    console.log("inside state for city id" + stateid.target.selectedIndex);

    console.log(this.states[0].cities[1].hubs);

    for (var x in this.states[this.sidRent].cities) {
      this.dispCityRental.push(this.states[this.sidRent].cities[x]);
    }
 console.log(this.states);
  }



  onStateReturn(stateid) {
    this.dispCityReturn = [];
    this.sidReturn = stateid.target.options[stateid.target.selectedIndex].value;


    this.PStateidReturn = this.sidReturn;
    console.log("sid of state:" + this.sidReturn);

    console.log("sid is" + this.sidReturn);


    console.log("sid is" + this.sidReturn);

    this.citys = this.states.filter(el => {
      console.log(el.stateid);
      return el.stateid == this.sidReturn
    }

    )
    console.log("inside state for city id" + stateid.target.selectedIndex);
 
    console.log(this.states[0].cities[1].hubs);
   
    for (var x in this.states[this.sidReturn].cities) {
      this.dispCityReturn.push(this.states[this.sidReturn].cities[x]);
    }
   
  }



















  onCityRent(cityid) {
    this.indexRent = cityid.target.selectedIndex; //city index

    this.dispHubRent = []; //hub array

    console.log("state id" + this.PStateidRent + "cityid" + this.indexRent);

    console.log(this.states[0].cities[1].hubs[1].hubaddress);

    for (let c in this.states[this.PStateidRent].cities[this.indexRent].hubs) {
      this.dispHubRent.push(this.states[this.PStateidRent].cities[this.indexRent].hubs[c].hubaddress);
    }

    console.log(this.dispHubRent);
    console.log("inside hubs");
    console.log(this.selectedOrg);
  }

  onCityReturn(cityid) {
    this.indexReturn = cityid.target.selectedIndex; //city index

    this.dispHubReturn = []; //hub array

    console.log("state id" + this.PStateidReturn + "cityid" + this.indexReturn);

    console.log(this.states[0].cities[1].hubs[1].hubaddress);

    for (let c in this.states[this.PStateidReturn].cities[this.indexReturn].hubs) {
      this.dispHubReturn.push(this.states[this.PStateidReturn].cities[this.indexReturn].hubs[c].hubaddress);
    }


    console.log("inside hubs");
  }


}
