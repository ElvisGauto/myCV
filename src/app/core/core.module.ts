import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { DesignModule } from '../design/design.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashCvComponent } from './components/dash-cv/dash-cv.component';
import { DesignCompleteModule } from '../design-complete/design-complete.module';

let components = [
  LoginComponent,
  NavBarComponent,
  HomeComponent,
  FooterComponent,
  DashboardComponent,
  DashCvComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DesignModule,
    SharedModule,
    DesignCompleteModule
  ],
  exports: [
    components
  ]
})
export class CoreModule { }
