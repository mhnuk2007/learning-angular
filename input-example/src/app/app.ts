import {Component} from '@angular/core';
import {User} from './user';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet],
})
export class App {
  name:string = '';
  school:string='';

  updateName(val: string){
    this.name=val;
  }

  updateSchool(e: Event|any){
    this.school = e.target.value;
  }
}
