import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-with-signal',
  imports: [],
  templateUrl: './with-signal.html',
  styleUrl: './with-signal.css',
})
export class WithSignal {
  name = signal('Honey Chauhan')

}
