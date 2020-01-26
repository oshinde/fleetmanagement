import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carCat } from '../Interfaces/carCat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url="http://localhost:8080/fleetmngmnt/";
  constructor(private http: HttpClient) { }

  getCars():Observable<carCat[]>
  {
    return this.http.get<any>(this.url+"crud/types");
  }

}
