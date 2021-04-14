import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightReservation';
<<<<<<< HEAD
=======
  showMsg=true;//ngIf
  color_name='red';//ngIf
  switchValue='one';//ngSwitch
  users=[
    {id:20,name:'prudhvi',cityCode:'AP'},
    {id:30,name:'prudhvi reddy',cityCode:'TN'},
    {id:40,name:'prudhvi',cityCode:'TN'},
    {id:50,name:'prudhvi',cityCode:'KN'},
    {id:60,name:'sai',cityCode:'pb'}

  ];
  user={
    id:10,name:'saaho',DOB:'05/19/1999',salary:12000.56,city:'hyd'
  }
  colorValue='c1';
  clsOne='one';
  clsTwo='two';
  subTitle='hii ra bagunava';
  hrefValue='www.google.com';
  updatedlink="www.oracle.com";
  btnClick(id:number){
    alert('Alert Message from ARC tutorials' + id);
    console.log('alert dialog opend');
  }
  hii="";
  
>>>>>>> 2fbbfd6 (Practice Code)
}
