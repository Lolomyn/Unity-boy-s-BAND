import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {catchError, tap , map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient, private htttp: Http) {}
  private baseUrl = 'http://localhost:3000/users';

  getUserByLogin(login: string): Observable<User> {
    return this.htttp.get(`http://localhost:3000/users?login=${login}`)
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
  //
  deleteUserById(del: User | number): Observable<User> {
    const id = typeof del === 'number' ? del : del.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<User>(url).pipe();
  }
  //
  updateUser(upd: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(`${'http://localhost:3000/users'}/${upd.id}`, upd, httpOptions).pipe();
  }
}
