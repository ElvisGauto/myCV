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
  pancho: number;
  arrayMore = [];

  flagCvEdit: boolean = false;
  flagAddMore: boolean = false;
  skillsChange = [];
  skillArr = [];
  listSkills$;
  listSkills: any = [];

  list = [];
  countChild: number;

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
        this.pancho = this.listSkills.length;
      });
    });  
  }

  edit() {
    this.flagCvEdit = true;
  }

  save(dataChange) {
    this.saveDataService.saveChanges(this.uid,'skills', dataChange) 
    this.shareCvService.updateShareCv(this.uidName, '5', dataChange);
    this.flagCvEdit = false;
    console.log(dataChange);
    this.flagAddMore = false;
    this.arrayMore = [];
  }

  addMore() {
    this.pancho = this.pancho + 1;
    if(this.pancho < 10) {
      this.flagAddMore = true;
      this.arrayMore.push(this.pancho);
    }
  }

}
