import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    SignupComponent,
    LandingpageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,
  RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
