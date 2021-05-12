import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import {Studying} from '../models/studying';


@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  getUserByLogin(login: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?login=${login}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  // getUserByType(type: string): Observable<User> {
    // return this.http.get(`http://localhost:3000/users?type=${type}`)
      // .map((response: Response) => response.json())
      // .map((user: User[]) => user[0] ? user[0] : undefined);
  // }

  createNewUser(user: User): Observable<User> {
    return this.http.post('http://localhost:3000/users', user).map((response: Response) => response.json());
  }
}
