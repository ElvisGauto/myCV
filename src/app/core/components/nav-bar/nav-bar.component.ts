import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user$;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    this.user$ = this.auth.user$;
  }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();

    this.router.navigate(['/']);
  }

}
