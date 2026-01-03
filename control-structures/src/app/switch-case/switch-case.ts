import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.html',
  styleUrl: './switch-case.css',
})
export class SwitchCase {
  status = signal('notStarted');

  handleSwitch(event: Event) {
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
