import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CountriesService } from './services/countries.service';

import { FeedbackService } from './services/feedback.service';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule
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
