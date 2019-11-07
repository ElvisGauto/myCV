import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
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

  save(goals) {
    this.saveDataService.save('contact',this.uid ,'goals', goals);
  }
}
