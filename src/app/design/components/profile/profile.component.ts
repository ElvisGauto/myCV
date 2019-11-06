import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { SaveDataService } from 'src/app/shared/services/save-data.service';

export interface Country {
  description: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  countries$;

  constructor(
    // private profileService: ProfileService,
    private saveDataService: SaveDataService,
    private countriesServices: CountriesService,
    private router: Router
  ) {
    this.countries$ = this.countriesServices.getCountries();
  }

  ngOnInit() {
  }

  save(profile) {
    this.saveDataService.save('aboutMe','profile', profile);
  }

}
