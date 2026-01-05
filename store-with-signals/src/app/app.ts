
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './core/store/user';
//import { CounterService} from './core/store/counter';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('store-with-signals');

  //constructor(public counterService: CounterService){}
  constructor(public userService: UserService){}
}
