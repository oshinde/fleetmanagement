import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BillingService {
  bid :number;
  url="http://localhost:8080/fleetmngmnt/";
  constructor(private http: HttpClient) { }
  getBill(code:number):Observable<any>
  {
    return this.http.get<any>(this.url+"booking/search/"+code);
  }
      
    
}
