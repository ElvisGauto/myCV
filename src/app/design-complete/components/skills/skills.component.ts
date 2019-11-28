import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input('cv') cv;
  @Input('uidName') uidName;
  @Input('flagButtons') flagButtons;

  uid: string;
  user$: any;

  flagCvEdit: boolean = false;
  skillsChange = [];

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
    let skill1 = (<HTMLInputElement>document.getElementById('skill1'));
    let skill2 = (<HTMLInputElement>document.getElementById('skill2'));
    let skill3 = (<HTMLInputElement>document.getElementById('skill3'));
    let skill4 = (<HTMLInputElement>document.getElementById('skill4'));

    this.skillsChange.push({
      skill1: skill1.value,
      skill2: skill2.value,
      skill3: skill3.value,
      skill4: skill4.value
    })
    
    this.saveDataService.saveChanges(this.uid,'skills', this.skillsChange[0]) 
    this.shareCvService.updateShareCv(this.uidName, '5', this.skillsChange[0]);
    this.skillsChange = [];
    this.flagCvEdit = false;
  }

  addMore() {
    let listSkills = document.getElementById('listSkills');
    let countChild = listSkills.childElementCount;
    let pancho = countChild + 1;

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'form-group');
    newDiv.setAttribute('id', `skill${pancho.toString()}`);

    newDiv.innerHTML = 
    `skill ${pancho}:
      <input type="text" id="skill${pancho}" width="100">`

    if(countChild <= 9) {
      listSkills.appendChild(newDiv);
    }
  }

}
