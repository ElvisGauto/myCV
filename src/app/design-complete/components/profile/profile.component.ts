import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input('profile') profile;
  @Input('displayName') displayName;
  @Input('photoURL') photoURL;

  constructor() { }

  ngOnInit() {
  }

}
