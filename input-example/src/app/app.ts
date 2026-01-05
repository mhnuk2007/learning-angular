import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet],
})
export class App {
  // Classic variables
  name: string = '';
  school: string = '';

  // Signals
  city = signal<string>('');
  country = signal<string>('');

  // Classic method
  updateName(val: string) {
    this.name = val;
  }

  updateSchool(e: Event | any) {
    this.school = e.target.value;
  }

  // Optional: signal update method
  updateCity(val: string) {
    this.city.set(val);
  }

  updateCountry(val: string) {
    this.country.set(val);
  }
}
