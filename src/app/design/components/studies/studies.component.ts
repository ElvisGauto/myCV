import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  constructor(
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }

  save(studies) {
    this.saveDataService.save('experience', 'studies', studies);
  }

}
