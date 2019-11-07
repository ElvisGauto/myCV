import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  user$;
  cvObject = {};
  cvArray = {};

  flagHome = false;
  // subscription: Subscription;

  uid: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private saveData: SaveDataService
  ) { 
  }

  ngOnInit() {
    this.user$ = this.auth.user$;
    if(this.user$) {
      
    }
    this.user$.subscribe(user => {
      if(user) {
        this.uid = user.uid
      }
    });

    this.saveData.getData().subscribe(data => {
      this.cvObject = data[this.uid];

      if (this.cvObject === undefined) {
        this.flagHome = false;
      } else {
        this.cvArray = Object.keys(this.cvObject).length;
        if(this.cvArray >= 7 ) {
          this.flagHome = true;
        } else {
          this.flagHome = false;
        }
      }
    });
  }

  ngOnDestroy() {
  }

}
