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
    this.router.navigate(['/profile'], {
      queryParams: this.userData()
    });
  }

  goToProfile1(){
    this.router.navigate(['/profile', this.userData().id]);
  }


  userData = signal({
    id: 1,
    name: 'Honey',
    age: 9
  });

}
