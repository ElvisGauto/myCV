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

  save(dataStudies) {
    this.saveDataService.save(this.flagRouteChange,'',this.uid,'studies', dataStudies);
    this.shareCvService.updateShareCv(this.uidName, '6', dataStudies);
    
    this.flagCvEdit = false;
    console.log(dataStudies);
  }

}
