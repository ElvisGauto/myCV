import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
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

  uid: string;

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
      if(x.uid) {
        this.uid = x.uid;
      }
    });
  }

  save(profile) {
    this.saveDataService.save('aboutMe',this.uid,'profile', profile);
  }

}
