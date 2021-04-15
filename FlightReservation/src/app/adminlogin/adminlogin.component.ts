import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
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

}



