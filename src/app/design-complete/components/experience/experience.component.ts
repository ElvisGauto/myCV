import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

import { AddMoreExperienceComponent } from './add-more-experience/add-more-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { ExperienceService } from './experience.service';

export interface DialogData {
  index: string;
  cantExperience: number;
  uidNameEx: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() cv;
  @Input() arrExperience;
  @Input() flagButtons;
  @Input() uidName;

  uid: string;
  user$: any;
  experience$;
  experienceChanges = [];
  flagCvEdit = false;

  index: string;
  uidNameEx: string;
  cantExperience: number;


  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService,
    private shareCvService: ShareCVService,
    private saveExperience: ExperienceService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.user$.subscribe(x => {
      if (x) {
        this.uid = x.uid;
      }

      this.cantExperience = this.arrExperience.length;

    });
  }

  edit(i) {
    this.index = i;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'experience-modal';
    this.dialog.open(EditExperienceComponent, {
      data: { index: this.index, uidNameEx: this.uidName}
    });
  }

  addMore(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'experience-modal';
    this.dialog.open(AddMoreExperienceComponent, {
      data: { cantExperience: this.cantExperience, uidNameEx: this.uidName  }
    });
  }

  delete(i) {
    this.saveExperience.delete('cv', this.uid, 'experience', i);
    this.saveExperience.delete('cvShare', this.uidName, '2', i);
  }

}
