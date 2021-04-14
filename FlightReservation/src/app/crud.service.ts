import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  searchFlightListFromRemote():Observable<any>{

     return  this.http.get<any>("http://localhost:8080/flightlist");
  }

  addFlightsToRemote(flight : Flight):Observable<any>{
    
    return this.http.post<any>("http://localhost:8080/addflightlist",flight);
  }
}
