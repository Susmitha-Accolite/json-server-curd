import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userData:User = {
    id: 0,
    firstName:'',
    lastName:'',
    email:''
  }

  URL:string = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get<User[]>(this.URL);
  }

  deleteUser(usr: User):Observable<any> {
    const url = `${this.URL}/${usr.id}`;
    return this.http.delete(url);
  }

  editUser(usr: User):Observable<any> {
    const url = `${this.URL}/${usr.id}`;
    return this.http.put(url, usr);
  }

  addUser(usr: User) :Observable<any> {;
    return this.http.post(this.URL, usr);
  }
}
