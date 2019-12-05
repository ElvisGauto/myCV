import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';

import { AddMoreExperienceComponent } from './add-more-experience/add-more-experience.component'
import { ExperienceService } from './experience.service';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';

export interface DialogData {
  index: string;
  cantExperience: number;
}

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input('cv') cv;
  @Input('uidName') uidName;
  @Input('flagButtons') flagButtons;

  uid: string;
  user$: any;
  experience$;
  index: string;
  experienceChanges = [];
  flagCvEdit: boolean = false;

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
      if(x) {
        this.uid = x.uid;
      }

      this.experience$ = this.saveDataService.showDataList('cv',this.uid, 'experience');
      this.experience$.subscribe(x => {
        this.experienceChanges = x;
        this.cantExperience = this.experienceChanges.length;
      })
      
    });  
  }

  edit(i) {
    this.index = i;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'experience-modal';
    this.dialog.open(EditExperienceComponent, {
      data: { index: this.index }
    });
  }

  addMore(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'experience-modal';
    this.dialog.open(AddMoreExperienceComponent, {
      data: { cantExperience: this.cantExperience }
    });
  }

}
