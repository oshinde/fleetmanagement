import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../Services/vehicle.service';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {

  carCat=[];
  constructor(public vehicle:VehicleService) { }
  

  
  ngOnInit() {

    this.vehicle.getCars().subscribe(data => {this.carCat = data
    console.log(this.carCat);
    
    });

  }
  ok(k)
  {
  
  
  if(k.target.checked)
  {
    localStorage.setItem('carCategory',k.target.value);
  }

    var x=k.target.value;
  console.log(x);
  
  }
  
}
