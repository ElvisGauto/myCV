import { Component, OnInit, Input } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  @Input('cv') cv;

  uid: string;
  user$: any;

  flagCvEdit: boolean = false;

  goalsChanges = [];

  constructor(
    private saveDataService: SaveDataService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.user$.subscribe(x => {
      if(x) {
        this.uid = x.uid;
      }
    });  
  }

  edit() {
    this.flagCvEdit = true;
  }

  save() {
    let goal1 = (<HTMLInputElement>document.getElementById('goals1'));
    let goal2 = (<HTMLInputElement>document.getElementById('goals2'));
    let goal3 = (<HTMLInputElement>document.getElementById('goals3'));

    this.goalsChanges.push({
      Goals1: goal1.value,
      Goals2: goal2.value,
      Goals3: goal3.value
    })
    
    this.saveDataService.saveChanges(this.uid,'goals', this.goalsChanges[0]) 
    this.goalsChanges = [];
    this.flagCvEdit = false;
  }

}
