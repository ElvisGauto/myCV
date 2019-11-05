import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

export interface Country {
  description: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  

  constructor(private profileService: ProfileService) { }

  country: Country[] = [
    { description: "Argentina" },
    { description: "Brasil" },
    { description: "Bolivia" },
    { description: "Chile" },
    { description: "Colombia" },
    { description: "Peru" },
    { description: "Uruguay" },
    { description: "Paraguay" },
    { description: "Venezuela" },
    { description: "Uruguay" }
  ]

  ngOnInit() {
  }

  save(product) {
    this.profileService.saveProfile(product);
  }

}
