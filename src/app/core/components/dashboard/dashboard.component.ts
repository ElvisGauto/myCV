import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { SaveDataService } from 'src/app/shared/services/save-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
