import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {BaseApi} from '../core/base-api';
import {User} from '../models/user.model';
import {AddUserModel} from '../models/adduser.model';
import {Studying} from '../models/studying';


@Injectable()
export class AddService extends BaseApi {
private UserData = 'http://localhost:3000/users';

constructor(http: Http) {
   super(http);
   }

  User(user: User): Observable<User> {
   return this.post('users', user); }
}
