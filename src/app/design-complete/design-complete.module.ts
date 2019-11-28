import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormsModule } from '@angular/forms';

let components = [
  ProfileComponent, 
  AboutMeComponent, 
  ContactComponent, 
  GoalsComponent, 
  SkillsComponent, 
  StudiesComponent,
  ExperienceComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    components
  ]
})
export class DesignCompleteModule { }
