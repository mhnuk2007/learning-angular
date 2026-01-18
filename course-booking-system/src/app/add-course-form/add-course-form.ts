import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-course-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-course-form.html',
  styleUrl: './add-course-form.css',
})
export class AddCourseForm {
  addCourseForm!: FormGroup;
  course = signal<Course | null>(null);
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
  ) {}

ngOnInit(): void {
  this.addCourseForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(1)]],
    date: [''],
    imgUrl: [''],
    soldOut: [false],
    onSale: [false],
  });
}


onSubmit(): void {
  this.submitted = true;

  if (this.addCourseForm.invalid) {
    return;
  }

  const course: Course = {
    id: 0,
    title: this.addCourseForm.value.title,
    description: this.addCourseForm.value.description,
    price: Number(this.addCourseForm.value.price),
    date: this.addCourseForm.value.date,
    imgUrl: this.addCourseForm.value.imgUrl,
    soldOut: this.addCourseForm.value.soldOut,
    onSale: this.addCourseForm.value.onSale,
  };

  this.courseService.addCourse(course).subscribe({
    next: () => {
      console.log('Course added successfully');
      this.addCourseForm.reset({
        soldOut: false,
        onSale: false
      });
      this.submitted = false;
    },
    error: (error) => {
      console.error('Error adding course:', error);
    }
  });
}

hasError(field: string): boolean {
  const control = this.addCourseForm.get(field);
  return !!(control && control.invalid && (control.touched || this.submitted));
}

getError(field: string, error: string): boolean {
  const control = this.addCourseForm.get(field);
  return !!(control && control.errors?.[error]);
}

}
