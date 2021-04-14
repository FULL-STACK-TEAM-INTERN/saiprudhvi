import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { AdminAddFlightComponent } from './admin-add-flight/admin-add-flight.component';
import { AdminFlightListComponent } from './admin-flight-list/admin-flight-list.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardGuard } from './login-guard.guard';
>>>>>>> 2fbbfd6 (Practice Code)
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';

<<<<<<< HEAD
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'searchflights',component:SearchflightsComponent}
=======

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate:[LoginGuardGuard]},//it is guarded(security)
  {path:'registration',component:RegistrationComponent},
  {path:'searchflights',component:SearchflightsComponent},
  {path:'flightlist',component:FlightListComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admin-flight-list', component:AdminFlightListComponent},
  {path:'admin-add-flight',component:AdminAddFlightComponent,}
  
>>>>>>> 2fbbfd6 (Practice Code)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
