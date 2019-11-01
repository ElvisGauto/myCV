import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';

let components = [
  LoginComponent,
  NavBarComponent,
  HomeComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    components
  ]
})
export class CoreModule { }
