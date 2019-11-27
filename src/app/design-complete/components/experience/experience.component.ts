import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input('cv') cv;

  uid: string;
  user$: any;

  experienceChanges = [];
  flagCvEdit: boolean = false;

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService
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
    let companyName = (<HTMLInputElement>document.getElementById('companyName'));
    let timePeriod = (<HTMLInputElement>document.getElementById('timePeriod'));
    let responsibilities = (<HTMLInputElement>document.getElementById('responsabilities'));

    this.experienceChanges.push({
      companyName: companyName.value,
      timePeriod: timePeriod.value,
      responsibilities: responsibilities.value
    })
    
    this.saveDataService.saveChanges(this.uid,'experience', this.experienceChanges[0]) 
    this.experienceChanges = [];
    this.flagCvEdit = false;
  }

}
