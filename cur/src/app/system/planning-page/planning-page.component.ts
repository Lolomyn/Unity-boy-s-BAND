import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {StudyingService} from '../shared/services/studying.service';
import {AddpatientModel} from '../shared/models/addpatient.model';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit {
  form: FormGroup;
  studying = this.patientService.getStudying(); patients = this.patientService.getPatients();
  constructor(private addService: AddService, private patientService: StudyingService) { }

  // changePatient(pat: AddpatientModel): void {
  //   this.patientService.changePatient(pat).subscribe();
  // }
  deletePatient(pat: AddpatientModel): void {
    this.patientService.deletePat(pat).subscribe();
  }
  ngOnInit() {
    this.form = new FormGroup({
      Patients: new FormControl(),
    });
  }
}
