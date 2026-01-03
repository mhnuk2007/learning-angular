import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = signal('Guest');
  temp = signal('');

  updateTemp(event: Event) {
    const target = event.target as HTMLInputElement;
    this.temp.set(target.value);
  }

  updateUser() {
    this.user.set(this.temp());
  }
}
