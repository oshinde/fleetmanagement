import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IState } from '../Interfaces/istate';

@Injectable({
  providedIn: 'root'
})
export class StatedataService {

  url="http://localhost:8080/fleetmngmnt/";
  constructor(private http: HttpClient) { }
  getStates():Observable<IState[]>
  {
    return this.http.get<any>(this.url+"crud/states");
  }

  
  
}






