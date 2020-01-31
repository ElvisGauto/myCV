import { Component, OnInit } from '@angular/core';
import { Router, provideRoutes } from '@angular/router';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Profile } from 'selenium-webdriver/firefox';

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
  user$;

  flagRoute = true;
  uid: string;

  displayName;
  photoURL;

  dataFilter = [];


  constructor(
    // private profileService: ProfileService,
    private saveDataService: SaveDataService,
    private countriesServices: CountriesService,
    private authService: AuthService
  ) {
    this.countries$ = this.countriesServices.getCountries();
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
    this.user$.subscribe(x => {
      if (x) {
        this.displayName = x.displayName;
        this.photoURL = x.photoURL;
        this.uid = x.uid;
      }
    });
  }

  save(profile) {

    this.dataFilter.push({
      displayName: this.displayName,
      imageProfile: this.photoURL,
      country: profile.country
    });

    this.saveDataService
      .save(this.flagRoute, 'design/aboutMe', this.uid, 'profile', this.dataFilter[0]);
  }

}
