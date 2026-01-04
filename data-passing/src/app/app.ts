import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('data-passing');

  users = signal(['honey', 'sunny', 'hitesh', 'sandeep', 'mukesh']);
  tempUser = signal('');
  selectedUser = signal('');

  addUser() {
    this.users.update((data) => [...data, this.tempUser()]);
    this.tempUser.set('');
  }

  selectUser(user: string) {
    this.selectedUser.set(user);
  }

  deleteUser() {
    this.users.update((data) => data.filter((user) => user !== this.selectedUser()));
  }
}
