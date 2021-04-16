import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
admin = new Admin();
msg='';//to show user 

  constructor(private service : AdminService, private router :Router) { }

  ngOnInit(): void {
  }

  adminLogin(){

    this.service.loginAdminFromRemote(this.admin).subscribe(
      data =>{ 
        console.log("response recieved");
        this.router.navigate(['/admin-flight-list']);
    },
      error =>{
        console.log("not found user");
      this.msg="Admin Not Found, Please enter valid admin-id and password!";
  
  } )
  }

}



