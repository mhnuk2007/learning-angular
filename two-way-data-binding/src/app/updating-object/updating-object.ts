import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-updating-object',
  imports: [],
  templateUrl: './updating-object.html',
  styleUrl: './updating-object.css',
})
export class UpdatingObject {
  userData = signal({
    name: 'Honey',
    age: 10,
    email: 'honey@example.com'
  });

  updateUserData(key: string, value: any) {
    this.userData.update((data) => ({
      ...data,
      [key]: value
    }));
  }



}
