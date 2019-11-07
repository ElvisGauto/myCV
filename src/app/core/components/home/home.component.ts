import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  user$;
  cv = {};
  subscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private saveData: SaveDataService
  ) { 
    this.user$ = this.auth.user$;
    this.user$.subscribe(x => console.log(x));
  }

  ngOnInit() {
    this.subscription = this.saveData.getData().subscribe(data => this.cv = data)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
