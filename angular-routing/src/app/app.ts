
import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserDetails } from "./user-details/user-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef
  protected readonly title = signal('angular-routing');


  async loadUserDetails(){
    this.container?.clear();
    console.log('loadUserDetails');
    const {UserDetails} = await import('./user-details/user-details')
    this.container?.createComponent(UserDetails)
  }
}
