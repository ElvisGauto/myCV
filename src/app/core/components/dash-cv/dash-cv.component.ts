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

  user$;

  displayName;
  photoURL;

  cvFinished$;


  CV = [];
  profileKey: string;

  ex: string;
  uid: string;
  inputShared: string;
  urlCopied: string;
  

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
      }
      this.cvFinished$ = this.dataService.showAllData(this.uid);

      this.dataService.getDataByCategory(this.uid, 'profile').subscribe(profile => {
        this.CV.push(profile[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'aboutMe').subscribe(aboutMe => {
        this.CV.push(aboutMe[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'studies').subscribe(studies => {
        this.CV.push(studies[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'skills').subscribe(skills => {
        this.CV.push(skills[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'experience').subscribe(experience => {
        this.ex = experience[0].workExperience;

        this.CV.push(experience[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'goals').subscribe(goals => {
        this.CV.push(goals[0]);
      })

      this.dataService.getDataByCategory(this.uid, 'contact').subscribe(contact => {
        this.CV.push(contact[0]);
      })
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
    let name = this.displayName.replace(" ", "")
    let uidModify = this.uid.slice(8, -4);

    let uidName = `${name}${uidModify}`;
    let routeUidName = `cvVision/${uidName}`;

    let url = window.location.href;
    if(url.includes('home')) {
      this.urlCopied = url.replace('home', routeUidName);
    } else if(url.includes('dash-cv')){
      this.urlCopied = url.replace('dash-cv', routeUidName);
    }
    console.log(this.urlCopied);
    inputShared.value = this.urlCopied;     

    document.body.appendChild(inputShared);
    
    inputShared.focus();
    inputShared.select();


    this.shareCVService.shareCV(uidName, this.CV);

    document.execCommand('copy');
    document.body.removeChild(inputShared);
  }

  deleteCv() {
    this.dataService.deleteCv('cv', this.uid);
    this.dataService.deleteCv('cvFinished', this.uid);
  }
}
