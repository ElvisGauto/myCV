import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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


  uid: string;

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

      this.goals$ = this.dataService.getDataByCategory(this.uid, 'goals');

      this.contact$ = this.dataService.getDataByCategory(this.uid, 'contact');
    });    

  }

  element(i) {
    let contact = document.getElementById(i);
    let topPos = contact.offsetTop - 75;

    contact.style.border = '1px solid red';
    let dashCV = document.getElementById('dashCV');

    setTimeout(function(){ 
      contact.style.border = '1px solid rgba(0, 0, 0, 0.125)';
    }, 500);

    dashCV.scrollTop = topPos;

    
  }
}
