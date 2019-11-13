import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'dash-cv',
  templateUrl: './dash-cv.component.html',
  styleUrls: ['./dash-cv.component.scss']
})
export class DashCvComponent implements OnInit {

  user$;

  displayName;
  photoURL;

  profile$;
  aboutMe$;
  contact$;
  experience$;
  goals$;
  skills$;
  studies$;


  uid: string;

  constructor(
    private dataService: SaveDataService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
    
 
    this.user$.subscribe(user => {
      if(user) {
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.uid = user.uid
      }

      this.profile$ = this.dataService.getDataByCategory(this.uid, 'profile');

      this.aboutMe$ = this.dataService.getDataByCategory(this.uid, 'aboutMe');

      this.studies$ = this.dataService.getDataByCategory(this.uid, 'studies');

      this.skills$ = this.dataService.getDataByCategory(this.uid, 'skills');

      this.experience$ = this.dataService.getDataByCategory(this.uid, 'experience');

      this.goals$ = this.dataService.getDataByCategory(this.uid, 'goals');

      this.contact$ = this.dataService.getDataByCategory(this.uid, 'contact');
    });    

  }

  elementProfile() {
    document.getElementById('dashCV').scrollTop = 0;
  }
  elementAboutMe() {
    let aboutMe = document.getElementById('aboutMe');
    let topPos = aboutMe.offsetTop - 72;

    document.getElementById('dashCV').scrollTop = topPos;
  }
  elementStudies() {
    let studies = document.getElementById('studies');
    let topPos = studies.offsetTop - 72;

    document.getElementById('dashCV').scrollTop = topPos;
  }
  elementSkills() {
    let skills = document.getElementById('skills');
    let topPos = skills.offsetTop - 72;

    document.getElementById('dashCV').scrollTop = topPos;
  }

  elementExperience() {
    let experience = document.getElementById('experience');
    let topPos = experience.offsetTop - 72;

    document.getElementById('dashCV').scrollTop = topPos;
  }
  elementGoals() {
    let goals = document.getElementById('goals');
    let topPos = goals.offsetTop - 72;

    document.getElementById('dashCV').scrollTop = topPos;
  }
  elementContact() {
    let contact = document.getElementById('contact');
    let topPos = contact.offsetTop - 72;

    document.getElementById('dashCV').scrollTop = topPos;
  }
}
