import { Component, OnInit } from '@angular/core';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private saveDataService: SaveDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(skills) {
    this.saveDataService.save('studies','skills', skills);
  }

}
