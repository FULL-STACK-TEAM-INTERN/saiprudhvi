import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
}
