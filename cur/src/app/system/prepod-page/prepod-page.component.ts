import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {StudyingService} from '../shared/services/studying.service';
import {Studying} from '../shared/models/studying';

@Component({
  selector: 'app-prepod-page',
  templateUrl: './prepod-page.component.html',
  styleUrls: ['./prepod-page.component.scss']
})
export class PrepodPageComponent implements OnInit {
  selectedCourse: string;
  // selectedThemes: string;
  user: User = JSON.parse(this.getUser());
  studying = this.studyingService.getStudying();
  // studying2 = this.studyingService.getThemes();
  constructor(private studyingService: StudyingService) {
  }

  ngOnInit() {
  }

  getUser(): any {
    return localStorage.getItem('user');
  }
}

