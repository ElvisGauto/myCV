import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$;
  cvObject = {};
  cvArray = {};

  flagHome: boolean;
  flagFeedback: boolean;
  flagWithoutCV: boolean;

  uid: string;

  feedbackError$;

  constructor(
    private auth: AuthService,
    private router: Router,
    private saveData: SaveDataService,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.feedbackError$ = this.feedbackService.messageError();
 
    this.user$.subscribe(user => {
      if(user) {
        this.uid = user.uid
      }
    });



    this.saveData.getData().subscribe(data => {
      this.cvObject = data[this.uid];

      if (this.cvObject === undefined) {
        this.flagHome = false;
        this.flagWithoutCV = true;
        this.flagFeedback = false;
      } else {
        this.cvArray = Object.keys(this.cvObject).length;
        if(this.cvArray >= 7 ) {
          this.flagHome = true;
          this.flagWithoutCV = false;
          this.flagFeedback = false;
        } else if(this.cvArray < 7) {
          this.flagFeedback = true;
          this.flagWithoutCV = false;
          this.flagHome = false;
        } 
      }
    });
  }

  ngOnDestroy() {
  }

}
