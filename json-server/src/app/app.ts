import { Component, signal } from '@angular/core';
import { UserService } from './services/user-service';
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

  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');


  constructor(private userService: UserService){}

  ngOnInit(){
    this.loadUsers();

  }
loadUsers(){
      this.userService.getUsers().subscribe((data)=>{
      this.users.set(data);
    });}

    submitForm(){
      const payload: User = {
        name: this.name(),
        email: this.email(),
        isActive: false
      }
      this.userService.addUser(payload).subscribe(()=>{
        this.loadUsers();
        this.name.set('');
        this.email.set('');

      });
    }

}
