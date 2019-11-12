import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { SaveDataService } from 'src/app/shared/services/cv-data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

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
      this.displayName = x.displayName;
      this.photoURL = x.photoURL;
      console.log(x);
      if(x.uid) {
        this.uid = x.uid;
      }
    });
  }

  save(profile) {
    this.saveDataService.save(this.flagRoute, 'aboutMe',this.uid,'profile', profile);
    console.log(profile);
  }

}
