import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {BaseApi} from '../core/base-api';
import {AddpatientModel} from '../models/addpatient.model';
import {Studying} from '../models/studying';


@Injectable()
export class AddService extends BaseApi {
private PatientData = 'http://localhost:3000/patients';

constructor(http: Http) {
   super(http);
   }

  Patient(patient: AddpatientModel): Observable<AddpatientModel> {
   return this.post('patients', patient); }
}
