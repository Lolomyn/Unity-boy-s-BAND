import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {BaseApi} from '../core/base-api';
import {User} from '../models/user.model';
import {AddUserModel} from '../models/adduser.model';
import {Studying} from '../models/studying';
import {HttpClient} from '@angular/common/http';
import {StudyingService} from './studying.service';
import {ThemesModel} from '../models/themes.model';


@Injectable()
export class AddService extends BaseApi {
// private UserData = 'http://localhost:3000/users';

constructor(http: Http) { super(http); }
  User(user: User): Observable<User> {
    return this.http.post('http://localhost:3000/users', user).map((response: Response) => response.json());
  }
  Study(study: Studying): Observable<Studying> {
    return this.http.post('http://localhost:3000/study', study).map((response: Response) => response.json());
      }
  Theme(themes: ThemesModel): Observable<ThemesModel> {
    return this.http.post('http://localhost:3000/study', themes).map((response: Response) => response.json());
  }
}
