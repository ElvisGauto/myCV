import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }

  save(experience) {
    this.saveDataService.save('goals','experience', experience);
  }

}
