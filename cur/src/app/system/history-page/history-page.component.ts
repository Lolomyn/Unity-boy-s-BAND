import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  user: User = JSON.parse(this.getUser());

  constructor() {
  }

  ngOnInit() {

  }

  getUser(): any {
    return localStorage.getItem('user');
  }
}
