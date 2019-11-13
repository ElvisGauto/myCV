import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  @Input('go') go;

  constructor() { }

  ngOnInit() {
  }

}
