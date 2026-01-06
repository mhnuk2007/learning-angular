import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router){}

  goToProfile(){
    this.router.navigate(['/profile']);
  }

  userData = signal({
    id: 1,
    name: 'Honey',
    age: 9
  });

}
