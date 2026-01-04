import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WithSignal } from "./with-signal/with-signal";
import { WithNgmodel } from "./with-ngmodel/with-ngmodel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WithSignal, WithNgmodel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('two-way-data-binding');
}
