import { Injectable } from '@angular/core';
import { IRegisteruser } from '../Interfaces/iregisteruser';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisteruserdataService {

  url="http://localhost:8080/FleetManagement1/";
  constructor(private http: HttpClient) { }

  getUsers():Observable<IRegisteruser[]>{
    
    return this.http.get<IRegisteruser[]>(this.url+"fleet/search/301");
    console.log();
  }
}