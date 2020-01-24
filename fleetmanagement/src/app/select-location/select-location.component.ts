import { Component, OnInit } from '@angular/core';
import { StatedataService } from '../Services/statedata.service';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})
export class SelectLocationComponent implements OnInit {

  constructor(private _userserv:StatedataService) { }
  states=[];


  
  
  ngOnInit() {
    this._userserv.getStates().subscribe(data=>this.states=data);

  }
  }


