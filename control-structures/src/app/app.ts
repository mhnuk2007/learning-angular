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
  status=signal('progress');
  users = signal(['honey', 'sunny', 'mukesh', 'hitesh', 'sandeep'])

  handleLogin(state: boolean){
    this.isLogin.set(state);
  }

  handleStatus(event: Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
