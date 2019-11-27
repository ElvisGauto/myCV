import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input('cv') cv;
  @Input('uidName') uidName;
  @Input('flagButtons') flagButtons;

  flagCvEdit: boolean = false;
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
      if(x) {
        this.uid = x.uid;
      }
    });  
  }

  edit() {
    this.flagCvEdit = true;
  }

  save() {
    let email = (<HTMLInputElement>document.getElementById('email'));
    let telephone1 = (<HTMLInputElement>document.getElementById('telephone1'));
    let telephone2 = (<HTMLInputElement>document.getElementById('telephone2'));
    let linkedin = (<HTMLInputElement>document.getElementById('linkedin'));

    this.contactChanges.push({
      Email: email.value,
      Telephone1: telephone1.value,
      Telephone2: telephone2.value,
      linkedin: linkedin.value
    })
    
    this.saveDataService.saveChanges(this.uid,'contact', this.contactChanges[0]) 
    this.shareCvService.updateShareCv(this.uidName, '1', this.contactChanges[0]);
    this.contactChanges = [];
    this.flagCvEdit = false;
  }

}
