import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  userSignal = signal({
    name: '',
    email: '',
  });

  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });

    this.form.valueChanges.subscribe((value: any) => {
      this.userSignal.set(value);
    });
  }

  submitForm(){
    console.log(
      `Name: ${this.userSignal().name}, Email:${this.userSignal().email}`
    );
  }
}
