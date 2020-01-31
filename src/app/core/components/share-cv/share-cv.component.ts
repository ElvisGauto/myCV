import { Component, OnInit } from '@angular/core';
import { ShareCVService } from 'src/app/shared/services/share-cv.service';
import { ActivatedRoute } from '@angular/router';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-share-cv',
  templateUrl: './share-cv.component.html',
  styleUrls: ['./share-cv.component.scss']
})
export class ShareCVComponent implements OnInit {
  cvVisionShare$;
  flagButtons = false;

  listSkills$;

  user: { nameUser: string };
  arrExperience = [];
  arrSkills = [];

  constructor(
    private shareCvService: ShareCVService,
    private activatedRoute: ActivatedRoute,
    private dataService: SaveDataService,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.user = {
      nameUser: this.activatedRoute.snapshot.params.nameUser
    };
    this.cvVisionShare$ = this.shareCvService.showShareCV(this.user.nameUser);
    this.cvVisionShare$.subscribe(x => {
      this.arrExperience = x[2];
    });

    this.listSkills$ = this.dataService.showDataList('cvShare', this.user.nameUser, '5');
    this.listSkills$.subscribe(data => {
      this.arrSkills = data;
    });

  }

  element(i) {
    const contact = document.getElementById(i);
    const topPos = contact.offsetTop - 75;

    contact.style.border = '1px solid rgb(24, 223, 17)';
    const dashCV = document.getElementById('shareCV');

    setTimeout(() => {
      contact.style.border = '1px solid rgba(0, 0, 0, 0.125)';
    }, 500);

    dashCV.scrollTop = topPos;
  }
}
