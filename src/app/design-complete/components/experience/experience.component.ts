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
  uidNameEx: string;
}

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input('cv') cv;
  @Input('arrExperience') arrExperience;
  @Input('flagButtons') flagButtons;
  @Input('uidName') uidName;

  uid: string;
  user$: any;
  experience$;
  experienceChanges = [];
  flagCvEdit: boolean = false;
  
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
      if(x) {
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
