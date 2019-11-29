import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';
import { database } from 'firebase';

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
  addFlag: boolean = false;
  skillsChange = [];
  skillArr = [];
  listSkills$;
  listSkills: any = [];

  list = [];
  countChild: number;
  pancho;

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

      this.listSkills$ = this.saveDataService.showDataList('cv', this.uid, 'skills');
      this.listSkills = document.getElementById('listSkills');

      this.listSkills$.subscribe(data => {
        this.listSkills = data;
      });
    });  
    


  }

  edit() {
    this.flagCvEdit = true;
  }

  save(dataChange) {
    // this.saveDataService.saveChanges(this.uid,'skills', dataChange) 
    // this.shareCvService.updateShareCv(this.uidName, '5', dataChange);
    // this.flagCvEdit = false;
    console.log(dataChange);
    this.addFlag = false;
  }

  addMore() {
    this.addFlag = true;
    let skillList = document.getElementById('skillList');
    let countChild = skillList.childElementCount;

    let pancho = countChild + 5;
    let jajaja = `skill${pancho.toString()}`

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'form-group');
    newDiv.setAttribute('id', jajaja);

    newDiv.innerHTML = 
    `Skill${pancho}:
      <input type="text" ngModel name="skill${pancho}" id="skill${pancho}" width="100">`

    if(pancho <= 10) {
      skillList.appendChild(newDiv);
    }
  }

}
