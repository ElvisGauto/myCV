import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @Input() cv;
  @Input() uidName;
  @Input() flagButtons;

  flagCvEdit = false;

  aboutMeChanges = [];
  flagRouteChange = false;
  uid: string;
  user$: any;

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService,
    private shareCvService: ShareCVService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.user$.subscribe(x => {
      if (x) {
        this.uid = x.uid;
      }
    });
  }

  edit() {
    this.flagCvEdit = true;
  }

  save() {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const pancho = (<HTMLInputElement> document.getElementById('aboutMeChanges'));
    this.aboutMeChanges.push({
      aboutMe: pancho.value.trim()
    });

    this.saveDataService.saveChanges(this.uid, 'aboutMe', this.aboutMeChanges[0]);
    this.shareCvService.updateShareCv(this.uidName, '0', this.aboutMeChanges[0]);
    this.aboutMeChanges = [];
    this.flagCvEdit = false;
  }
}
