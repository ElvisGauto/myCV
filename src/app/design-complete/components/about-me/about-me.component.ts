import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @Input('ab') ab;

  constructor() { }

  ngOnInit() {
  }

}
