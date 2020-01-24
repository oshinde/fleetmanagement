import { Injectable } from '@angular/core';
import { IRegisteruser } from '../Interfaces/iregisteruser';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisteruserdataService {

  url="http://localhost:8080/fleetmngmnt/";
  constructor(private http: HttpClient) { }

  getUsers(code:number):Observable<IRegisteruser>{
  
    return this.http.get<IRegisteruser>(this.url+"fleet/usersearch/"+code);
    console.log();
  }
  postUser(userObj):Observable<any>{
    return this.http.post<any>(this.url+"fleet/add",userObj);
  }
}
