import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user$;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { 
    this.user$ = this.auth.user$;
  }

}
