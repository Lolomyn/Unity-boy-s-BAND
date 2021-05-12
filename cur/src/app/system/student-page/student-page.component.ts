import { Component, OnInit } from '@angular/core';
import {StudyingService} from '../shared/services/studying.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  studying = this.studyingService.getStudying();
  constructor(private studyingService: StudyingService) { }

  ngOnInit() {
  }

}
