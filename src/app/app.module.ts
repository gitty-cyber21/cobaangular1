import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const ROUTES : Routes = [
  {path : 'login', component: LoginComponent },
  {path : 'home', component: HomeComponent },
  {path : 'home/:nama', component: HomeComponent }
]

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule, 
  RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
