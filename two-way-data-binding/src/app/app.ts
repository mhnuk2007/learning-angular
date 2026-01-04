import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WithSignal } from "./with-signal/with-signal";
import { WithNgmodel } from "./with-ngmodel/with-ngmodel";
import { UpdatingObject } from "./updating-object/updating-object";
import { SignalsGetterSetter } from "./signals-getter-setter/signals-getter-setter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WithSignal, WithNgmodel, UpdatingObject, SignalsGetterSetter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('two-way-data-binding');
}
