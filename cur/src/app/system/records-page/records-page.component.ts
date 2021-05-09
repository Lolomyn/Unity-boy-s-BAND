import { Component, OnInit } from '@angular/core';
import {AddpatientModel} from '../shared/models/addpatient.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {PatientService} from '../shared/services/patient.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {
  form: FormGroup;
  constructor(private addService: AddService, private patientService: PatientService) { }

  ngOnInit() {
    this.form = new FormGroup({
      Name: new FormControl(),
      Card: new FormControl(),
      Date: new FormControl(),
      Age: new FormControl(),
      Diagnosis: new FormControl(),
    });
  }
  onSubmit1() {
    const formData = this.form.value;
    const pat = String(formData.Name);
    const card = Number(formData.Card);
    const date = String(formData.Date);
    const age = Number(formData.Age);
    const diagnos = String(formData.Diagnosis);
    const patient = new AddpatientModel(pat, card, date, age, diagnos);
    this.addService.Patient(patient)
      .subscribe(() => {
        alert('Добавлено!');
      });
  }
}
