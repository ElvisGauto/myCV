import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  user$;

  uid: string;

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

  save(studies) {
    this.saveDataService.save('experience',this.uid, 'studies', studies);
  }

}
