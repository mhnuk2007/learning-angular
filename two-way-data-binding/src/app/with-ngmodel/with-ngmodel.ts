import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-ngmodel',
  imports: [FormsModule,],
  templateUrl: './with-ngmodel.html',
  styleUrl: './with-ngmodel.css',
})
export class WithNgmodel {
  age = 10;
  grade= 4;

}
