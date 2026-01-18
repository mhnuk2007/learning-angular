import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../services/course';
import { Course } from '../model/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService){}
  courses = signal<Course[] | null>(null);
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name:[''],
      email: [''],
      enrolledCourseIds:['']
    })

    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses.set(data);
        console.log('Courses loaded successfully:', data);
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    })
  }



}
