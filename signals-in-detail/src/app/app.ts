import { Component, effect, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('signals-in-detail');

  // Normal property vs signal
  data = 10;
  count = signal(0);

  updateData() {
    this.data++;
  }

  updateCount() {
    this.count.set(this.count() + 1);
  }

  constructor() {
    // Effect to watch reactive signals
    effect(() => {
      console.log('Data (normal):', this.data);
      console.log('Count (signal):', this.count());
    });

    effect(() => {
      if (this.speed() > 0 && this.speed() <= 80) {
        this.color = 'green';
      } else if (this.speed() > 80 && this.speed() <= 120) {
        this.color = 'yellow';
      } else if (this.speed() > 120) {
        this.color = 'red';
      } else {
        this.color = 'black';
      }

      console.log('Speed (signal):', this.speed());
    });

    effect(() => {
      console.log('Fruit (signal):', this.fruit());
    });
  }

  // -------------------
  // Area examples
  // Normal properties
  nHeight = 100;
  nWidth = 100;
  nArea = this.nHeight * this.nWidth;

  sArea1 = signal(this.nHeight * this.nWidth);

  // Basic signals
  sHeight = signal(100);
  sWidth = signal(100);
  sArea2 = this.sHeight() * this.sWidth(); // NOT reactive

  // Computed signal (reactive)
  cArea = computed(() => this.sHeight() * this.sWidth());

  // -------------------
  // Update methods
  handlenWidth() {
    this.nWidth = this.nWidth + 10;
  }

  handlesWidth() {
    this.sWidth.set(this.sWidth() + 10); // cArea auto-updates
  }

  // Global state with signals
  // Effect in Angular

  speed = signal(0);
  color = 'black';

  increaseSpeed() {
    this.speed.set(this.speed() + 10);
  }

  fruit = signal('apple');
  changeFruit() {
    this.fruit.set('banana');
  }

  name=signal('');
  changeName(){
    this.name.set('Honey Chauhan')
  }

  setName(name:string){
    this.name.set(name);

  }
}
