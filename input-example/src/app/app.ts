import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: ` <app-user name = "Honey" occupation="Angular Developer" /> `,
  imports: [User],
})
export class App {
  name:string = '';
}
