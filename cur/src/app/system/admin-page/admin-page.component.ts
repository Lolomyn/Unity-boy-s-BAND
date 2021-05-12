import { Component, OnInit } from '@angular/core';
import {AddpatientModel} from '../shared/models/addpatient.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {StudyingService} from '../shared/services/studying.service';
import {UsersService} from '../shared/services/users.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  form: FormGroup;
  user = this.studyingService.getUser();
  constructor(private addService: AddService, private studyingService: StudyingService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      login: new FormControl(),
      password: new FormControl(),
      type: new FormControl(),
    });
  }
  onSubmit1() {
    // const formData = this.form.value;
    // const pat = String(formData.Name);
    // const card = Number(formData.Card);
    // const date = String(formData.Date);
    // const age = Number(formData.Age);
    // const diagnos = String(formData.Diagnosis);
    // const patient = new AddpatientModel(pat, card, date, age, diagnos);
    // this.addService.Patient(patient)
    //   .subscribe(() => {
    //     alert('Добавлено!');
    //   });
  }
}
