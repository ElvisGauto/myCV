import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  user$;

  uid: string;

  flagRoute = true;
  flagButton = false;
  flagInput = false;
  flagProgress = false;

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService
  ) {
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.user$.subscribe(x => {
      if (x) {
        this.uid = x.uid;
      }
    });
  }

  save(studies) {
    this.saveDataService.save(this.flagRoute, 'design/experience', this.uid, 'studies', studies);
  }

  enableButton() {
    this.flagButton = true;
    this.flagInput = true;
    this.flagProgress = false;
  }

  disabledButtons() {
    this.flagButton = true;
    this.flagInput = false;
  }

  inProgress() {
    this.flagButton = true;
    this.flagInput = true;
    this.flagProgress = true;
  }

}
