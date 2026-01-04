import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-signals-getter-setter',
  imports: [FormsModule],
  templateUrl: './signals-getter-setter.html',
  styleUrl: './signals-getter-setter.css',
})
export class SignalsGetterSetter {
  _city = signal('Umerkot')

  get city() {
    return this._city()
  }
  set city(value: string) {
    this._city.set(value)
  }



}
