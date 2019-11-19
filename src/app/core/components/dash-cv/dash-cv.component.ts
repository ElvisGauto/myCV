import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
  
@Component({
  selector: 'dash-cv',
  templateUrl: './dash-cv.component.html',
  styleUrls: ['./dash-cv.component.scss']
})
export class DashCvComponent implements OnInit {

  user$;

  displayName;
  photoURL;

  profile$;
  aboutMe$;
  contact$;
  experience$;
  goals$;
  skills$;
  studies$;

  ex: string;
  uid: string;
  inputShared: string;
  urlCopied: string;

  constructor(
    private dataService: SaveDataService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
 
    this.user$.subscribe(user => {
      if(user) {
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.uid = user.uid
      }

      this.profile$ = this.dataService.getDataByCategory(this.uid, 'profile');

      this.aboutMe$ = this.dataService.getDataByCategory(this.uid, 'aboutMe');

      this.studies$ = this.dataService.getDataByCategory(this.uid, 'studies');

      this.skills$ = this.dataService.getDataByCategory(this.uid, 'skills');

      this.experience$ = this.dataService.getDataByCategory(this.uid, 'experience');

      this.experience$.subscribe(ex => {
       this.ex = ex[0].workExperience;
      })

      this.goals$ = this.dataService.getDataByCategory(this.uid, 'goals');

      this.contact$ = this.dataService.getDataByCategory(this.uid, 'contact');
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

    let url = window.location.href;
    this.urlCopied = url.replace('home', 'dash-cv');
    inputShared.value = this.urlCopied    

    document.body.appendChild(inputShared);
    
    inputShared.focus();
    inputShared.select();

    document.execCommand('copy');
    
    document.body.removeChild(inputShared);

    alert('URL Copiada');
  }

}
