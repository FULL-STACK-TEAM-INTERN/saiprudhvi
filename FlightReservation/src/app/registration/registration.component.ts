import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';//importing service in the component
import { User } from '../user';
>>>>>>> 2fbbfd6 (Practice Code)

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  user = new User();//like object calling
  msg='';

  constructor(private registrationService : RegistrationService, private router :Router) { }
>>>>>>> 2fbbfd6 (Practice Code)

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  registerUser(){

    this.registrationService.registerUserFromRemote(this.user).subscribe(//calling method from the service
      data =>{ 
        console.log("response recieved");
        this.msg="Registration successful";
        //this.router.navigate(['/login']);
    },
      error =>{
        console.log("exception occured");
      this.msg=error.error;
  
  } )
  }

>>>>>>> 2fbbfd6 (Practice Code)
}
