import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input('cv') cv;
  // @Input('displayName') displayName;
  // @Input('photoURL') photoURL;

  constructor() { }

  ngOnInit() {
  }

}
