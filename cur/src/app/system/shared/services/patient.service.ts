import {Injectable} from '@angular/core';
import {DoctorModel} from '../models/doctor.model';
import {AddpatientModel} from '../models/addpatient.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
@Injectable()
export class PatientService {
  private PatientData = 'http://localhost:3000/patients';
  // changePatient(pat: AddpatientModel): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   const id = typeof pat === 'number' ? pat : pat.id;
  //   return this.http.put(`${this.PatientData}/${id}`, pat, httpOptions).pipe(
  //     tap(updatedMovie => console.log(`updated movie = ${JSON.stringify(updatedMovie)}`)),
  //   );
  // }
  constructor(private http: HttpClient) {}

  deletePat(pat: AddpatientModel | number): Observable<AddpatientModel> {
    const id = typeof pat === 'number' ? pat : pat.id;
    const url = `${this.PatientData}/${id}`;
    return this.http.delete<AddpatientModel>(url).pipe();
  }
  getPatients(): Observable<AddpatientModel[]> {
    return this.http.get<AddpatientModel[]>(`http://localhost:3000/patients`);
  }
  getPatient(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(`http://localhost:3000/doctor1`);
  }

}
