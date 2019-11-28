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

  save(pancho) {
      // let jaja = document.getElementById(pancho);
      console.log(pancho); 
  }

  addMore() {
    let listSkills = document.getElementById('listSkills');
    let countChild = listSkills.childElementCount;
    let pancho = countChild + 1;
    let jajaja = `skill${pancho.toString()}`

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'form-group');
    newDiv.setAttribute('id', jajaja);

    newDiv.innerHTML = 
    `skill ${pancho}:
      <input type="text" ngModel name="skill${pancho}" id="skill${pancho}" width="100">`

    if(countChild <= 9) {
      listSkills.appendChild(newDiv);
    }
  }

}
