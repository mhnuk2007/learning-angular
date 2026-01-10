import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  constructor(public userService: UserService){}

  userData: any = signal("");


  ngOnInit(){
    const data = this.userService.userList();
    this.userData.set(data);
    console.log(this.userData());
  }

}
