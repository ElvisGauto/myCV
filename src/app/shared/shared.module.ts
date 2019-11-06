import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CountriesService } from './services/countries.service';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';



@NgModule({
  declarations: [ProfileCardComponent],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    CountriesService
  ]
})
export class SharedModule { }
