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
  cv$;

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
    }); 
  }

  redirectDashCV() {
    this.router.navigate(['/dash-cv']);
  }
}
