import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('property-binding');

  btnDisabled=false;
  username:string='honey';
  inputReadOnly=false;
  selectCheckBox= false;
  toggleDisabled(){
    this.btnDisabled=!this.btnDisabled;
  } 
  toggleReadOnly(){
    this.inputReadOnly=!this.inputReadOnly;
  }



}
