<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule} from '@angular/core';
>>>>>>> 2fbbfd6 (Practice Code)
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { HoverEffectPipe } from './hover-effect.pipe';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';//we imported it
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminFlightListComponent } from './admin-flight-list/admin-flight-list.component';
import { AdminAddFlightComponent } from './admin-add-flight/admin-add-flight.component';
import { AdminViewFlightComponent } from './admin-view-flight/admin-view-flight.component';

>>>>>>> 2fbbfd6 (Practice Code)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SearchflightsComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
=======
    HoverEffectPipe,
    HighlightPipe,
    LoginComponent,//main
    RegistrationComponent,//main
    FlightListComponent,
    HomeComponent,
    ReservationComponent,
    SearchflightsComponent,
    AdminloginComponent,
    AdminFlightListComponent,
    AdminAddFlightComponent,
    AdminViewFlightComponent//main
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule//or we can also our own name shuch as httpclient or HttpClientModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy}//Routing Strategy
  ],
>>>>>>> 2fbbfd6 (Practice Code)
  bootstrap: [AppComponent]
})
export class AppModule { }
