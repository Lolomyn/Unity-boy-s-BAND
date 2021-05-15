import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {StudyingService} from '../shared/services/studying.service';
import {Studying} from '../shared/models/studying';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-prepod-page',
  templateUrl: './prepod-page.component.html',
  styleUrls: ['./prepod-page.component.scss']
})
export class PrepodPageComponent implements OnInit {
  selectedCourse: string;
  user: User = JSON.parse(this.getUser());
  studying = this.studyingService.getStudying();
  constructor(private studyingService: StudyingService) {
  }

  ngOnInit() {
  }

  getUser(): any {
    return localStorage.getItem('user');
  }
}

