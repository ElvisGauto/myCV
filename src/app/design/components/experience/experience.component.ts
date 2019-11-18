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

  flagRoute = true;
  flagButton: boolean = false;
  flagInput: boolean = false;

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService
  ) { 
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.user$.subscribe(x => {
      if(x.uid) {
        this.uid = x.uid;
      }  
    });
  }

  save(experience, valid) {
    if(valid) {
      this.saveDataService.save(this.flagRoute, 'goals',this.uid,'experience', experience); 
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
