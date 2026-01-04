import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-getter-setter',
  imports: [FormsModule],
  templateUrl: './signals-getter-setter.html',
  styleUrl: './signals-getter-setter.css',
})
export class SignalsGetterSetter {
  _city = signal('Umerkot');

  userDetails = signal({
    name: 'Honey Chauhan',
    school: 'spsc',
    email: 'honey@example.com',
  })

  get city() {
    return this._city();
  }
  set city(value: string) {
    this._city.set(value);
  }

  get userSchool() {
    return this.userDetails().school;
  }

  set userSchool(value: string) {
    this.userDetails.update((data) => ({
      ...data,
      school: value,
    }));
  }
}
