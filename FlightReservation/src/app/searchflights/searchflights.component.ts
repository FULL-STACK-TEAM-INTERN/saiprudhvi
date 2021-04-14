import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { RegistrationService } from '../registration.service';
>>>>>>> 2fbbfd6 (Practice Code)

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.scss']
})
export class SearchflightsComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }
=======
  flight = new Flight();

  constructor(private registrationService : RegistrationService,private router :Router) { }

  ngOnInit(): void {
  }
  searchFlights(){

    this.registrationService.findFlightFromRemote(this.flight).subscribe(//calling method from the service
      data =>{ 
        console.log("response recieved");
        this.router.navigate(['/flightlist']);
    },
      error =>{
        console.log("exception occured");
      
  
  } )
  }
    
>>>>>>> 2fbbfd6 (Practice Code)

}
