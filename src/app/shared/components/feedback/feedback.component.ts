import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';

import { AuthService } from '../../services/auth.service';
import { SaveDataService } from '../../services/cv-data.service';
import { ShareCVService } from '../../services/share-cv.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  @Input('feedback') feedback;

  displayName: string;
  photoURL: string;
  uid: string;

  CV = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private shareCvService: ShareCVService,
    private dataService: SaveDataService
    
  ) {
   }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.uid = user.uid
      }

      this.dataService.getDataByCategory(this.uid, 'profile').subscribe(profile => {
        this.CV.push(profile[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'aboutMe').subscribe(aboutMe => {
        this.CV.push(aboutMe[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'studies').subscribe(studies => {
        this.CV.push(studies[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'skills').subscribe(skills => {
        this.CV.push(skills[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'experience').subscribe(experience => {
        this.CV.push(experience[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'goals').subscribe(goals => {
        this.CV.push(goals[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'contact').subscribe(contact => {
        this.CV.push(contact[0]);
      })
    }); 
  }

  redirectDashCV() {
    this.dataService.saveAllData(this.uid, this.CV);

    this.router.navigate(['/dash-cv']);
  }
}
