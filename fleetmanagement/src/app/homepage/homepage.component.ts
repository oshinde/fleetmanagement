import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StatedataService } from '../Services/statedata.service';
import { IState } from '../Interfaces/istate';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 
  constructor(private _userserv:StatedataService) { }
  index:number;
  PStateid:number;
  isChecked:boolean = false;
  rental: Date = new Date();
  return: Date = new Date();
  sid:number;
  cid:number;
  states=[];
  citys:any;
  hubys:any;
  dispCity=[];
  dispHub=[];
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

  }

  onState(stateid){
    this.dispCity=[];
    this.sid=stateid.target.options[stateid.target.selectedIndex].value;
    this.PStateid=this.sid;
    console.log("sid of state:"+this.sid);
   this.citys=this.states.filter(el=>{console.log(el.stateid);
    return el.stateid==this.sid}
    
    )
    console.log("inside state for city id"+stateid.target.selectedIndex);
//states[0].cities[1].hubs
console.log(this.states[0].cities[1].hubs);
// for(let v=0;v<this.citys.length;v++)
//     {
//       this.dispCity.push(this.citys.cities);
//     }
//     console.log(this.states[this.sid].cities);
// console.log(typeof(this.citys[0].cities[0]));

for(var x in this.states[this.sid].cities){
  this.dispCity.push(this.states[this.sid].cities[x]);
}
// console.log(this.dispCity);
} 
onCity(cityid)
{
  this.index=cityid.target.selectedIndex; //city index

  this.dispHub=[]; //hub array

  console.log("state id"+this.PStateid+"cityid"+this.index);

  console.log(this.states[this.PStateid].cities[this.index].hubs[1].hubaddress);

  for( let c in this.states[this.PStateid].cities[this.index].hubs)
  {
    this.dispHub.push(this.states[this.PStateid].cities[this.index].hubs[c].hubaddress);
  }

  console.log(this.dispHub);
  console.log("inside hubs");
}


}
