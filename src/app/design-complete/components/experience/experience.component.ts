import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input('ex') ex;

  constructor() { }

  ngOnInit() {
  }

}
