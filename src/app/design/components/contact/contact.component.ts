import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  user$;
  feedbackSuccess$;

  dashCV: true;

  flagRoute: boolean;
  flagFeedback = false;
  cvObject = {};
  cvArray = {};

  uid: string;

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService,
    private feedbackService: FeedbackService,
    private saveData: SaveDataService
  ) {
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.feedbackSuccess$ = this.feedbackService.messageSuccessful();

    this.user$.subscribe(x => {
      if (x) {
        this.uid = x.uid;
      }
    });

    this.saveData.getData().subscribe(data => {
      this.cvObject = data[this.uid];

      if (this.cvObject === undefined) {
        this.flagFeedback = false;
      } else {
        this.cvArray = Object.keys(this.cvObject).length;
        if (this.cvArray >= 7 ) {
          this.flagFeedback = true;
        } else {
        }
      }
    });
  }

  save(contact) {
    this.flagFeedback = true;
    this.saveDataService.save(this.flagRoute, '', this.uid, 'contact', contact);
  }

}
