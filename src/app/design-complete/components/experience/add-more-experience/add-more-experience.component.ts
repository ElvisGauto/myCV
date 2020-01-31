import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../experience.component';

import { ExperienceComponent } from '../experience.component';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-add-more-experience',
  templateUrl: './add-more-experience.component.html',
  styleUrls: ['./add-more-experience.component.scss']
})
export class AddMoreExperienceComponent implements OnInit {
  flagRoute = false;
  numberRandom: number;

  addExperiences = [];
  user$;
  uid: string;

  constructor(
    public dialogRef: MatDialogRef<ExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private saveDataService: SaveDataService,
    private authService: AuthService,
    private serviceExperience: ExperienceService
    ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.user$.subscribe(x => {
      if (x) {
        this.uid = x.uid;
      }
    });
    this.numberRandom = Math.floor(Math.random() * 9000000 + 100) + 1000000;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  add(experience, valid) {
    if (valid) {
      this.serviceExperience.addMore('cv' , this.uid, 'experience', `experience${this.numberRandom}`, experience);
      this.serviceExperience.addMore('cvShare' , this.data.uidNameEx, '2', `experience${this.numberRandom}`, experience);
      this.dialogRef.close();
    }
  }

}
