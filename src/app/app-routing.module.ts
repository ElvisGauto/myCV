import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ProfileComponent } from './design/components/profile/profile.component';
import { AboutMeComponent } from './design/components/about-me/about-me.component';
import { SkillsComponent } from './design/components/skills/skills.component';
import { StudiesComponent } from './design/components/studies/studies.component';
import { ExperienceComponent } from './design/components/experience/experience.component';
import { GoalsComponent } from './design/components/goals/goals.component';
import { ContactComponent } from './design/components/contact/contact.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { FeedbackComponent } from './shared/components/feedback/feedback.component';
import { DashCvComponent } from './core/components/dash-cv/dash-cv.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'dash-cv', component: DashCvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
