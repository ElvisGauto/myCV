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

  constructor(
    private router: Router,
    private cvDataService: SaveDataService,
    private auth: AuthService,
    private shareCvService: ShareCVService
    
  ) {
   }

  ngOnInit() {
    
  }

  redirectDashCV() {
    

    this.router.navigate(['/dash-cv']);
  }
}
