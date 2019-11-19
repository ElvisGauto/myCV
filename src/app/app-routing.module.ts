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
  { path: 'design/profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'design/aboutMe', component: AboutMeComponent },
  { path: 'design/skills', component: SkillsComponent },
  { path: 'design/studies', component: StudiesComponent },
  { path: 'design/experience', component: ExperienceComponent },
  { path: 'design/goals', component: GoalsComponent },
  { path: 'design/contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'dash-cv', component: DashCvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
