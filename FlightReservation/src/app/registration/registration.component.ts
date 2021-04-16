import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user = new User();//like object calling
  msg='';

  constructor(private registrationService : RegistrationService, private router :Router) { }

  ngOnInit(): void {
  }

  registerUser(){

    this.registrationService.registerUserFromRemote(this.user).subscribe(//calling method from the service
      data =>{ 
        console.log("response recieved");
        this.msg="Registration successful";
        this.router.navigate(['/login']);
    },
      error =>{
        console.log("exception occured");
      this.msg=error.error;
  
  } )
  }

}
