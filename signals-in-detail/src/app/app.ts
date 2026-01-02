import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signals-in-detail');

  data=10;
  count=signal(0);


  updateData(){  
    this.data++;
  }

  updateCount(){
    this.count.set(this.count()+1);
    console.log(this.count()+1)
  }
}
