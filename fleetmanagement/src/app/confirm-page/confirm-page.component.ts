import { Component, OnInit } from '@angular/core';
import {IRegisteruser} from '../Interfaces/iregisteruser';
import { RegisteruserdataService } from '../Services/registeruserdata.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {
  users:IRegisteruser;
  constructor(private _userserv:RegisteruserdataService,private _userCode: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let reguser:string=this._userCode.snapshot.params['code'];
    let code1:number=parseInt(reguser);
    this._userserv.getUsers(code1).subscribe(data=>this.users=data);
  }

}
