import { Component, signal } from '@angular/core';
import { UserService } from './services/user-service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // userService = inject(UserService);

  // users = toSignal<User[]>(this.userService.getUsers());

  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');

  editingUpdateId = signal<number | null>(null);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users.set(data);
    });
  }

  //Add or Update user
  submitForm() {
    const payload: User = {
      name: this.name(),
      email: this.email(),
      isActive: false,
    };
    if (this.editingUpdateId()) {
      this.userService.updateUser(this.editingUpdateId()!, payload).subscribe(() => {
        alert('User updated successfully');
        this.afterSave();
      });
    } else {
      this.userService.addUser(payload).subscribe(() => {
        alert('User added successfully');
        this.afterSave();
      });
    }
  }

  //Edit user
  editUser(user: User) {
    this.editingUpdateId.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }
  afterSave() {
    this.loadUsers();
    this.name.set('');
    this.email.set('');
    this.editingUpdateId.set(null);
  }
}
