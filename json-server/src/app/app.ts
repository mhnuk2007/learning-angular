import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // userService = inject(UserService);

  // users = toSignal<User[]>(this.userService.getUsers());

  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    });
  }


}
