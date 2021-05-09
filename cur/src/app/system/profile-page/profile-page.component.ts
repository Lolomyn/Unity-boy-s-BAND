import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/models/user.model';
import {AuthService} from '../shared/auth.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  date: Date = new Date();
  email: User;
  user: User = JSON.parse(this.getUser());
  constructor(private authService: AuthService,
              private router: Router) {}


  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.email = JSON.parse(window.localStorage.getItem('email'));
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  getUser(): any {
    return localStorage.getItem('user');
  }
}
