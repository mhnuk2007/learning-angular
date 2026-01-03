import { UserData } from './user-data/user-data';
import { AdminData } from './admin-data/admin-data';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminData, UserData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('style-options');
}
