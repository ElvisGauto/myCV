import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private auth: AuthService, 
    private router: Router, 
    private userService: UserService) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.userService.saveUser(user);

        let returnUrl = localStorage.getItem('returnUrl');
        localStorage.removeItem('returnUrl');
        if (returnUrl) {
          this.router.navigateByUrl(returnUrl);
        }
      }
    });
  }
}
