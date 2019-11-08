import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AboutMeComponent,
    SkillsComponent,
    StudiesComponent,
    GoalsComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ProfileComponent,
    AboutMeComponent,
    ContactComponent
  ]
})
export class DesignModule { }
