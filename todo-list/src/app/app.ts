import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('');
  tasks = signal([{ id: 0, title: 'Team Lunch', completed: false }]);
  addTask() {
    console.log(this.title());
    this.tasks.update((data) => [
      ...data,
      { id: data.length, title: this.title(), completed: false },
    ]);
    this.title.set('');
  }
  deleteTask(id: number) {
    this.tasks.update((data) => data.filter((task) => task.id !== id));
  }
}
