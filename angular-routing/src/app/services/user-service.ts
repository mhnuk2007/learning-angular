import { Injectable } from '@angular/core';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList(){
    return[
      {id: 1, name: 'Honey', age: 9, email: 'honey@example.com'},
      {id: 2, name: 'Sunny', age: 26, email: 'sunny@example.com'},
      {id: 3, name: 'Mukesh', age: 32, email: 'mukesh@example.com'},
      {id: 4, name: 'Hitesh', age: 24, email: 'hitesh@example.com'},
      {id: 5, name: 'Sandeep', age: 20, email: 'sandeep@example.com'}
    ]
  }

}
