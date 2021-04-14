<<<<<<< HEAD
=======
import { Route } from '@angular/compiler/src/core';
>>>>>>> 2fbbfd6 (Practice Code)
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
<<<<<<< HEAD
import { User } from '../user';
=======
import{User} from'../user';

>>>>>>> 2fbbfd6 (Practice Code)
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

  user = new User();
  msg ="";

  constructor(private service: RegistrationService, private router: Router ) { }

  ngOnInit(): void {
  }

  loginUser(){

    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("response recieved");
        this.router.navigate(['/searchflights']);

    },
      error=>{
        console.log("exception");
       this.msg="User Not Found, please enter valid emailid and password";
      }
    )

  }
=======
user = new User();
msg='';//to show user    

  constructor(private service : RegistrationService, private router :Router) { }

  ngOnInit(): void {
  }
loginUser(){

  this.service.loginUserFromRemote(this.user).subscribe(
    data =>{ 
      console.log("response recieved");
      this.router.navigate(['/searchflights']);
  },
    error =>{
      console.log("not found user");
    this.msg="User Not Found, Please enter valid email and password!";

} )
}
gotoregistration(){
  this.router.navigate(['/registration']);
}
>>>>>>> 2fbbfd6 (Practice Code)
}
