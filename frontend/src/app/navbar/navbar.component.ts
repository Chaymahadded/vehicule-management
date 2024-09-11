import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService : LoginService,
    private router : Router)
   {}
   logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
