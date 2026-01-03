import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForLoop } from "./for-loop/for-loop";
import { SwitchCase } from "./switch-case/switch-case";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForLoop, SwitchCase, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('control-structures');

  isLogin = signal(true);
  show = signal(true);
  status = signal('progress');
  users = signal(['honey', 'sunny', 'mukesh', 'hitesh', 'sandeep']);
  userDetails = signal([
    { id: 1, name: 'honey', surname: 'chauhan', email: 'honey@example.com' },
    { id: 2, name: 'sunny', surname: 'chauhan', email: 'sunny@example.com' },
    { id: 3, name: 'mukesh', surname: 'chauhan', email: 'mukesh@example.com' },
    { id: 4, name: 'hitesh', surname: 'chauhan', email: 'hitesh@example.com' },
    { id: 5, name: 'sandeep', surname: 'chauhan', email: 'sandeep@example.com' },
  ]);

  handleLogin(state: boolean) {
    this.isLogin.set(state);
  }

  handleStatus(event: Event) {
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
