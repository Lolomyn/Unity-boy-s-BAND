import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {StudyingService} from '../shared/services/studying.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {Studying} from '../shared/models/studying';
import {ThemesModel} from '../shared/models/themes.model';

@Component({
  selector: 'app-prepod-page',
  templateUrl: './prepod-page.component.html',
  styleUrls: ['./prepod-page.component.scss']
})

export class PrepodPageComponent implements OnInit {
  form: FormGroup;
  selectedCourse: string;
  // selectedThemes: string;
  // themes = this.studyingService.getThemes();
  user: User = JSON.parse(this.getUser());
  studying = [];
  selectedThemes = [];
  selectedSections = [];
  // study: Studying = JSON.parse(this.getStudies());

  // studying2 = this.studyingService.getThemes();
  constructor(private studyingService: StudyingService, private addService: AddService) {
  }

  ngOnInit() {
    this.studyingService.getStudying().subscribe((targetStudying) => {
      this.studying = targetStudying;
      console.log(targetStudying);
    });
    this.form = new FormGroup({
      name: new FormControl(),
      id: new FormControl()
    });
  }

  getUser(): any {
    return localStorage.getItem('user');
  }
  // getStudies(): any {
  //   return localStorage.getItem('study');
  // }
  changeValue(value): any {
    this.selectedThemes = this.studying.find((course) => course.prepod === value).themes;
    this.selectedSections = this.studying.find((course) => course.prepod === value).themes.section;
    console.log(this.selectedThemes);
  }
  changeValue2(value): any {
    this.selectedSections = this.studying.find((course) => course.prepod === value).themes.section;
    console.log(this.selectedSections);
  }

  add() {
    // document.getElementById('edit_id').style.display = 'none';
    document.getElementById('add_id').style.display = 'block';
  }
  onSubmit1() {
    const formData = this.form.value;
    // const themes = String(formData.themes.name)
    const name = String(formData.name);
    const id = Number(formData.id);
    const themes = new ThemesModel(name, id);
    this.addService.Theme(themes)
      .subscribe(() => {
        alert('Тема добавлена!');
      });
  }
}
