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
  cvArray: boolean;

  cvFinished$;

  flagHome: boolean;
  flagFeedback: boolean;
  flagWithoutCV: boolean;

  uid: string;

  feedbackError$;
  cv$: any;
  cvIncomplete = false;

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
      if (user) {
        this.uid = user.uid;
      }

      this.cv$ = this.saveData.showAllData('cv', this.uid);
      this.cv$.subscribe(x => {
        if (x.length >= 1 && x.length <= 6) {
          this.cvIncomplete = true;
        } else if (x.length === 7 || x.length === 0) {
          this.cvIncomplete = false;
        }
      });
    });
  }

}
