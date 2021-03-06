import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  @Input('cv') cv;
  @Input('uidName') uidName;
  @Input('flagButtons') flagButtons;

  flagCvEdit: boolean = false;
  
  
  studiesChanges = [];
  flagRouteChange: boolean = false;
  uid: any;
  user$: any;

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
    let nameSchool = (<HTMLInputElement>document.getElementById('nameSchool'));
    let titleSchool = (<HTMLInputElement>document.getElementById('titleSchool'));
    let citySchool = (<HTMLInputElement>document.getElementById('citySchool'));
    let departureSchool = (<HTMLInputElement>document.getElementById('departureSchool'));

    let collegeName = (<HTMLInputElement>document.getElementById('collegeName'));
    let titleCollege = (<HTMLInputElement>document.getElementById('titleCollege'));
    let adressCollege = (<HTMLInputElement>document.getElementById('adressCollege'));
    let yearCollege = (<HTMLInputElement>document.getElementById('yearCollege'));

    this.studiesChanges.push({
      nameSchool: nameSchool.value,
      titleSchool: titleSchool.value,
      citySchool: citySchool.value,
      departureSchool: departureSchool.value,

      collegeName: collegeName.value,
      titleCollege: titleCollege.value,
      adressCollege: adressCollege.value,
      yearCollege: yearCollege.value
    })
    
    this.saveDataService.save(this.flagRouteChange,'',this.uid,'studies', this.studiesChanges[0]);
    this.shareCvService.updateShareCv(this.uidName, '6', this.studiesChanges[0]);
    this.studiesChanges = []; 
    this.flagCvEdit = false;
  }

}
