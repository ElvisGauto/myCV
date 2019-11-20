import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  @Input('studies') studies;

  constructor() { }

  ngOnInit() {
  }

}
