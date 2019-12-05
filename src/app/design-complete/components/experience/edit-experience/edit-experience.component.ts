import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExperienceComponent } from 'src/app/design/components/experience/experience.component';
import { DialogData } from '../experience.component';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent implements OnInit {

  user$;
  experience$;

  uid: string;
  index: string;
  experienceChanges = [];

  constructor(
    public dialogRef: MatDialogRef<ExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private saveDataService: SaveDataService,
    private authService: AuthService,
    private saveExperience: ExperienceService
    ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.user$.subscribe(x => {
      if(x) {
        this.uid = x.uid;
      }

      this.experience$ = this.saveDataService.showDataListByItem('cv',this.uid, 'experience', this.data.index);
      this.experience$.subscribe(x => {
        this.experienceChanges = x;
      })
    }); 
  }

  cancel(): void {
    this.dialogRef.close();
  }

  saveEdit(dataExperience) {
    this.saveExperience.saveChanges('cv', this.uid,'experience', this.data.index, dataExperience);
    this.saveExperience.saveChanges('cvShare', this.data.uidNameEx, '2', this.data.index, dataExperience);
    if(Object.values(dataExperience).length === 3) {
      this.dialogRef.close();
    }
  }
}
