import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  user$;

  uid: string;

  flagRoute = true;

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService
  ) { 
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.user$.subscribe(x => {
      if(x.uid) {
        this.uid = x.uid;
      }  
    });
  }

  save(aboutMe) {
    this.saveDataService.save(this.flagRoute,'skills',this.uid,'aboutMe', aboutMe);
  }

}
