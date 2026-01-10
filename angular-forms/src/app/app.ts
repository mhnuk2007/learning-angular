import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = signal('');
  email = signal('');

  submitForm() {
    console.log('Name:', this.name());
    console.log('Email:', this.email());
  }

}
