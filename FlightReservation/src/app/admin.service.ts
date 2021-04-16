import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  public loginAdminFromRemote(admin :Admin):Observable<any>{

    return this.httpClient.post<any>("http://localhost:8080/adminlogin",admin);

   }
}
