import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course';
import { Course } from '../model/course.model';
import { CommonModule } from '@angular/common';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  courses = signal<Course[]>([]);
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      courseId: ['', Validators.required]
    });

    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses.set(data);
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signUpForm.valid) {
      const student: Student = {
        id: 0,
        name: this.signUpForm.value.name,
        email: this.signUpForm.value.email,
        enrolledCourseIds: [Number(this.signUpForm.value.courseId)]

      }
      this.courseService.addStudent(student).subscribe({
        next: (data) => {
          console.log('Student added successfully:', data);
        },
        error: (error) => {
          console.error('Error adding student:', error);
        }
      });
      console.log('Form submitted:', this.signUpForm.value);
      alert('Sign up successful!');
      this.signUpForm.reset();
      this.submitted = false;
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper to check if field has error
  hasError(fieldName: string): boolean {
    const field = this.signUpForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || this.submitted));
  }

  // Helper to get specific error
  getError(fieldName: string, errorType: string): boolean {
    const field = this.signUpForm.get(fieldName);
    return !!(field && field.errors?.[errorType]);
  }
}
