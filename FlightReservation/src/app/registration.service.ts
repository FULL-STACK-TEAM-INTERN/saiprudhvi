import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {User} from './user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

    public loginUserFromRemote(user :User):Observable<any>{

     return this.httpClient.post<any>("http://localhost:8080/login",user);

    }
  }
=======
import { Observable } from 'rxjs';
import {User} from'./user';
import{HttpClient, HttpParams} from '@angular/common/http';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'//these decorater can be say that it can be injectable to component
  // The service is ProvidedIn "root" will be available across the application - can be injected into any comonent
})
export class RegistrationService {

  constructor(private http:HttpClient) {}

    public loginUserFromRemote(user: User):Observable<any>{

    return  this.http.post<any>("http://localhost:8080/login",user)

    }
    public registerUserFromRemote(user: User):Observable<any>{

      return  this.http.post<any>("http://localhost:8080/registeruser",user)
  
      }
      //flight
      public findFlightFromRemote(flight: Flight):Observable<any>{

        const httpParams = new HttpParams({

        })

        return  this.http.get<any>("http://localhost:8080/findFlights",{params:httpParams}) 
      }
   }

>>>>>>> 2fbbfd6 (Practice Code)

