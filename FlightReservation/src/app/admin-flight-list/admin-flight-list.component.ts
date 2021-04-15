import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Flight } from '../flight';
import { FlightListComponent } from '../flight-list/flight-list.component';

@Component({
  selector: 'app-admin-flight-list',
  templateUrl: './admin-flight-list.component.html',
  styleUrls: ['./admin-flight-list.component.scss']
})
export class AdminFlightListComponent implements OnInit {

flightlist: Flight[];//flightlist array

  constructor(private service : CrudService, private router :Router) { }

  ngOnInit(): void {
    this.service.searchFlightListFromRemote().subscribe(
      data =>{
        console.log("response recieved");
        this.flightlist=data;
      },
      error =>console.log("exception occured")
    )
    }
}
