import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('control-structures');

  isLogin = signal(true);
  show = signal(true);


  handleLogin(state: boolean){
    this.isLogin.set(state);
  }
}
