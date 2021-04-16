import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddFlightComponent } from './admin-add-flight/admin-add-flight.component';
import { AdminFlightListComponent } from './admin-flight-list/admin-flight-list.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'searchflights',component:SearchflightsComponent},
  {path:'admin-flight-list',component:AdminFlightListComponent},
  {path:'admin-add-flight',component:AdminAddFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
