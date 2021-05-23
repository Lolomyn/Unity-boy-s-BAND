import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {StudyingService} from '../shared/services/studying.service';

@Component({
  selector: 'app-prepod-page',
  templateUrl: './prepod-page.component.html',
  styleUrls: ['./prepod-page.component.scss']
})

export class PrepodPageComponent implements OnInit {
  selectedCourse: string;
  // selectedThemes: string;
  themes = this.studyingService.getThemes();
  user: User = JSON.parse(this.getUser());
  studying = [];
  selectedThemes = [];
  selectedSections = [];

  // studying2 = this.studyingService.getThemes();
  constructor(private studyingService: StudyingService) {
  }

  ngOnInit() {
    this.studyingService.getStudying().subscribe((targetStudying) => {
      this.studying = targetStudying;
      console.log(targetStudying);
    });
  }

  getUser(): any {
    return localStorage.getItem('user');
  }

  changeValue(value): any {
    this.selectedThemes = this.studying.find((course) => course.prepod === value).themes;
    this.selectedSections = this.studying.find((course) => course.prepod === value).themes.section;
    console.log(this.selectedThemes);
  }
  changeValue2(value): any {
    this.selectedSections = this.studying.find((course) => course.prepod === value).themes.section;
    console.log(this.selectedSections);
  }
}
