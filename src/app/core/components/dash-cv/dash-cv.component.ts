import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';
  
@Component({
  selector: 'dash-cv',
  templateUrl: './dash-cv.component.html',
  styleUrls: ['./dash-cv.component.scss']
})
export class DashCvComponent implements OnInit {

  displayName;
  photoURL;
  flagButtons: boolean = true;

  cvFinished$;
  cvShare$;
  listSkills$;

  confirmUidName = {};
  CV = [];

  ex: boolean = false;
  uid: string;
  inputShared: string;
  urlCopied: string;
  name: any;
  uidModify: string;
  uidName: string;

  arrExperience = [];
  arrSkills = [];
  flagCvEdit: boolean = false;
  
  

  constructor(
    private dataService: SaveDataService,
    private auth: AuthService,
    private shareCVService: ShareCVService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.uid = user.uid

        this.name = this.displayName.replace(" ", "")
        this.uidModify = this.uid.slice(8, -4);
        this.uidName = `${this.name}${this.uidModify}`;
      }
      
      // this.dataService.deleteCv('cv', this.uid);
      this.cvFinished$ = this.dataService.showAllData('cv' ,this.uid);
      this.cvFinished$.subscribe(x => {
        this.CV = x;
        this.arrExperience = this.CV[2];
      })

      this.listSkills$ = this.dataService.showDataList('cv', this.uid, 'skills');
      this.listSkills$.subscribe(data => {
        this.arrSkills = data;
      });

      this.cvShare$ = this.shareCVService.showShareCV(this.uidName);
      this.cvShare$.subscribe(x => {
        this.confirmUidName = x.length;
      });
    });   
  }

  element(i) {
    let contact = document.getElementById(i);
    let topPos = contact.offsetTop - 75;

    contact.style.border = '1px solid rgb(24, 223, 17)';
    let dashCV = document.getElementById('dashCV');

    setTimeout(function(){ 
      contact.style.border = '1px solid rgba(0, 0, 0, 0.125)';
    }, 500);

    dashCV.scrollTop = topPos;
  }
  
  shareCV() {
    const inputShared = document.createElement('input');
    let routeUidName = `cvVision/${this.uidName}`;

    let url = window.location.href;
    if(url.includes('home')) {
      this.urlCopied = url.replace('home', routeUidName);
    } else if(url.includes('dash-cv')){
      this.urlCopied = url.replace('dash-cv', routeUidName);
    }
    inputShared.value = this.urlCopied;     

    document.body.appendChild(inputShared);
    
    inputShared.focus();
    inputShared.select();

    document.execCommand('copy');
    document.body.removeChild(inputShared);

    if(this.confirmUidName === 0) {
      this.shareCVService.shareCV(this.uidName, this.CV); 
    } 
    
    alert('CV link has been copied')
  }

  deleteCv() {
    this.dataService.deleteCv('cv', this.uid);
    this.dataService.deleteCv('cvShare', this.uidName);
  }
}
