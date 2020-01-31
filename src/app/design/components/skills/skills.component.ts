import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
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
      if (x) {
      this.uid = x.uid;
      }
    });
  }

  save(skills) {
    this.saveDataService.save(this.flagRoute, 'design/studies', this.uid, 'skills', skills);
  }

}
