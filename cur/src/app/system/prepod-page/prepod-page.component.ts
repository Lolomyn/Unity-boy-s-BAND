import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-prepod-page',
  templateUrl: './prepod-page.component.html',
  styleUrls: ['./prepod-page.component.scss']
})
export class PrepodPageComponent implements OnInit {
  user: User = JSON.parse(this.getUser());

  constructor() {
  }

  ngOnInit() {

  }

  getUser(): any {
    return localStorage.getItem('user');
  }
}
