import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }

  save(contact) {
    this.saveDataService.save('home','contact', contact);
  }

}
