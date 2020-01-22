import { Component, OnInit } from '@angular/core';
import { StatedataService } from '../Services/statedata.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  users=[];
  constructor(private _userserv:StatedataService) { }

  ngOnInit() {
    this._userserv.getStates().subscribe(data=>this.users=data);
    console.log(this.users);
  }

}
