import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  @Input() cv;
  @Input() uidName;
  @Input() flagButtons;

  uid: string;
  user$: any;

  flagCvEdit = false;

  goalsChanges = [];

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
    const goal1 = (<HTMLInputElement> document.getElementById('goals1'));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const goal2 = (<HTMLInputElement> document.getElementById('goals2'));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const goal3 = (<HTMLInputElement> document.getElementById('goals3'));

    this.goalsChanges.push({
      Goals1: goal1.value,
      Goals2: goal2.value,
      Goals3: goal3.value
    });

    this.saveDataService.saveChanges(this.uid, 'goals', this.goalsChanges[0]);
    this.shareCvService.updateShareCv(this.uidName, '3', this.goalsChanges[0]);
    this.goalsChanges = [];
    this.flagCvEdit = false;
  }

}
