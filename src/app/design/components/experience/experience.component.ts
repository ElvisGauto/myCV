import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  user$;

  uid: string;

  flagRoute = false;
  flagButton: boolean = false;
  flagInput: boolean = false;

  arrayExperiences = [];

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService
  ) { 
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.user$.subscribe(x => {
      if(x) {
        this.uid = x.uid;
      }  
    });
  }

  save(experience, valid) {
    this.arrayExperiences.push(experience);
    if(valid) {
      this.saveDataService.save(this.flagRoute, '',this.uid,'experience', this.arrayExperiences); 
    } 
  }

  enableButton() {
    this.flagButton = true;
    this.flagInput = true;
  }

  disabledButtons() {
    this.flagButton = true;
    this.flagInput = false;
  }

}
