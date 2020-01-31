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
import { AddMoreExperienceComponent } from './components/experience/add-more-experience/add-more-experience.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/components/material/material.module';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';

const COMPONENTS = [
  ProfileComponent,
  AboutMeComponent,
  ContactComponent,
  GoalsComponent,
  SkillsComponent,
  StudiesComponent,
  ExperienceComponent,
  AddMoreExperienceComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    EditExperienceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS
  ],
  entryComponents: [
    AddMoreExperienceComponent,
    EditExperienceComponent
  ]
})
export class DesignCompleteModule { }
