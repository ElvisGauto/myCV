import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DesignModule } from '../design/design.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashCvComponent } from './components/dash-cv/dash-cv.component';
import { DesignCompleteModule } from '../design-complete/design-complete.module';
import { ShareCVComponent } from './components/share-cv/share-cv.component';

let components = [
  LoginComponent,
  NavBarComponent,
  HomeComponent,
  DashboardComponent,
  DashCvComponent
]

@NgModule({
  declarations: [
    components,
    ShareCVComponent
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
