import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{name()}}</p>
    <p>The user's occupation is {{occupation()}}</p> `,
})
export class User {
    name = input<string>();
    occupation = input<string>();
}
