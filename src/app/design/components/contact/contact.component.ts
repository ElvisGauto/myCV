import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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

  save(contact) {
    this.saveDataService.save('home',this.uid,'contact', contact);
  }

}
