import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() cv;
  @Input() uidName;
  @Input() flagButtons;

  flagCvEdit = false;
  contactChanges = [];

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
    const email = (<HTMLInputElement> document.getElementById('email'));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const telephone1 = (<HTMLInputElement> document.getElementById('telephone1'));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const telephone2 = (<HTMLInputElement> document.getElementById('telephone2'));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const linkedin = (<HTMLInputElement> document.getElementById('linkedin'));

    this.contactChanges.push({
      Email: email.value,
      Telephone1: telephone1.value,
      Telephone2: telephone2.value,
      linkedin: linkedin.value
    });

    this.saveDataService.saveChanges(this.uid, 'contact', this.contactChanges[0]);
    this.shareCvService.updateShareCv(this.uidName, '1', this.contactChanges[0]);
    this.contactChanges = [];
    this.flagCvEdit = false;
  }

}
