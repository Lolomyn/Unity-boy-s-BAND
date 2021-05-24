import {Injectable} from '@angular/core';
import {Studying} from '../models/studying';
import {AddUserModel} from '../models/adduser.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Http, Response} from '@angular/http';
import {ThemesModel} from '../models/themes.model';

@Injectable()
export class StudyingService {
  private UserData = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private htttp: Http) {}
  //
  getStudying(): Observable<Studying[]> {
    return this.http.get<Studying[]>(`http://localhost:3000/study`);
  }
  getThemes(): Observable<ThemesModel[]> {
    return this.http.get<ThemesModel[]>(`http://localhost:3000/study`);
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
