import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {StudyingService} from '../shared/services/studying.service';
import {AddpatientModel} from '../shared/models/adduser.model';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit {
  form: FormGroup;
  studying = this.studyingService.getStudying(); patients = this.studyingService.getPatients();
  constructor(private addService: AddService, private studyingService: StudyingService) { }

  // changePatient(pat: AddpatientModel): void {
  //   this.patientService.changePatient(pat).subscribe();
  // }
  deletePatient(pat: AddpatientModel): void {
    this.studyingService.deletePat(pat).subscribe();
  }
  ngOnInit() {
    this.form = new FormGroup({
      Patients: new FormControl(),
    });
  }
}
