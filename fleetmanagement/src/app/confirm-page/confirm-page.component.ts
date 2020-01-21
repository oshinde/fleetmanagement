import { Component, OnInit } from '@angular/core';
import {IRegisteruser} from '../Interfaces/iregisteruser';
import { RegisteruserdataService } from '../Services/registeruserdata.service';
@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {
  users=[];
  constructor(private _userserv:RegisteruserdataService) { }

  ngOnInit() {
    this._userserv.getUsers().subscribe(data=>this.users=data);
  }

}
