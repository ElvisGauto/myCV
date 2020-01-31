import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SaveDataService } from '../../services/cv-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @Input() feedback;

  displayName: string;
  photoURL: string;
  uid: string;

  cvList: number;
  cv$;

  constructor(
    private router: Router,
    private auth: AuthService,
    private dataService: SaveDataService

  ) {
   }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.uid = user.uid;
      }

      this.cv$ = this.dataService.showAllData('cv', this.uid);
      this.cv$.subscribe(x => {
        this.cvList = x.length;
      });
    });
  }

  redirectToPage() {
    switch (this.cvList) {
      case 1:
        this.router.navigate(['/design/aboutMe']);
        break;
      case 2:
        this.router.navigate(['/design/skills']);
        break;
      case 3:
        this.router.navigate(['/design/studies']);
        break;
      case 4:
        this.router.navigate(['/design/experience']);
        break;
      case 5:
        this.router.navigate(['/design/goals']);
        break;
      case 6:
        this.router.navigate(['/design/contact']);
        break;
      case 7:
        this.router.navigate(['/dash-cv']);
        break;
    }
  }
}
