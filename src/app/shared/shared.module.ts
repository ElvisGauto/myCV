import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CountriesService } from './services/countries.service';

import { FeedbackService } from './services/feedback.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CvDashboardComponent } from './components/cv-dashboard/cv-dashboard.component';
import { MaterialModule } from './components/material/material.module';

@NgModule({
  declarations: [
    FeedbackComponent,
    CvDashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FeedbackComponent
  ],
  providers: [
    AuthService,
    CountriesService,
    FeedbackService
  ]
})
export class SharedModule { }
