import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  constructor(
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }

  save(goals) {
    this.saveDataService.save('contact','goals', goals);
  }
}
