import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient){}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL)
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiURL, user);
  }

  updateUser(id:number, user: User): Observable<User>{
    return(this.http.put<User>(`${this.apiURL}/${id}`, user));
  }

}
