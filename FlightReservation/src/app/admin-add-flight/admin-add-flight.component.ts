import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-admin-add-flight',
  templateUrl: './admin-add-flight.component.html',
  styleUrls: ['./admin-add-flight.component.scss']
})
export class AdminAddFlightComponent implements OnInit {
  flight = new Flight();
  msg ="";
  constructor(private crudService : CrudService, private router :Router) { }

  ngOnInit(): void {
  }

  addflight(){

    this.crudService.addFlightsToRemote(this.flight).subscribe(//calling method from the service
      data =>{ 
        console.log("response recieved");
        this.msg="Add To Database Successful";
        this.router.navigate(['/login']);
    },
      error =>{
        console.log("exception occured");
      this.msg=error.error;
  
  } )
  }
}
