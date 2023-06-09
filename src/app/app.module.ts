import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    EmpLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
