import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
    users = signal(['honey', 'sunny', 'mukesh', 'hitesh', 'sandeep']);
  userDetails = signal([
    { id: 1, name: 'honey', surname: 'chauhan', email: 'honey@example.com' },
    { id: 2, name: 'sunny', surname: 'chauhan', email: 'sunny@example.com' },
    { id: 3, name: 'mukesh', surname: 'chauhan', email: 'mukesh@example.com' },
    { id: 4, name: 'hitesh', surname: 'chauhan', email: 'hitesh@example.com' },
    { id: 5, name: 'sandeep', surname: 'chauhan', email: 'sandeep@example.com' },
  ]);


}
