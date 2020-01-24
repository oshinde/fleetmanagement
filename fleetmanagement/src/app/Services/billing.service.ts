import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BillingService {
  bid :number;
  url="http://localhost:8080/fleetmngmnt/";
  constructor(private http:HttpClient)
   { 
     this.bid=parseInt((document.getElementById("bookingid") as HTMLInputElement).value);
   }

   getUsers(bid:number):Observable<any>{
    this.bid=parseInt((document.getElementById("bookingid") as HTMLInputElement).value);
    console.log(bid);
    return this.http.get<any>(this.url+"fleet/search/"+this.bid);
    console.log();
  }
}
