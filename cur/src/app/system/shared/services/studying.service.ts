import {Injectable} from '@angular/core';
import {Studying} from '../models/studying';
import {AddUserModel} from '../models/adduser.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Http, Response} from '@angular/http';

@Injectable()
export class StudyingService {
  private UserData = 'http://localhost:3000/users';
  // changePatient(pat: AddUserModel): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   const id = typeof pat === 'number' ? pat : pat.id;
  //   return this.http.put(`${this.PatientData}/${id}`, pat, httpOptions).pipe(
  //     tap(updatedMovie => console.log(`updated movie = ${JSON.stringify(updatedMovie)}`)),
  //   );
  // }
  constructor(private http: HttpClient, private htttp: Http) {}

  // deletePat(pat: AddpatientModel | number): Observable<AddpatientModel> {
  //   const id = typeof pat === 'number' ? pat : pat.id;
  //   const url = `${this.PatientData}/${id}`;
  //   return this.http.delete<AddpatientModel>(url).pipe();
  // }
  // getPatients(): Observable<AddpatientModel[]> {
  //   return this.http.get<AddpatientModel[]>(`http://localhost:3000/patients`);
  // }
  getStudying(): Observable<Studying[]> {
    return this.http.get<Studying[]>(`http://localhost:3000/studying`);
  }
  getcourse(): Observable<Studying[]> {
    return this.http.get<Studying[]>(`http://localhost:3000/studying/course`);
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  getStudyingByID(id: number): Observable<User> {
    return this.htttp.get(`http://localhost:3000/studying?id=${id}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }
}
