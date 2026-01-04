import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { CurrencyConvertorPipe } from './custom-pipe/currency-convertor-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,TrimTextPipe, CurrencyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');

  user = signal('Honey Chauhan');
  name = signal('');
  amount = 5000;
  today = new Date();

  userDetails = signal({name:'Honey Chauhan', age:9, email:'honey@example.com'});

}
