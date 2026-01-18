import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
  @Output() courseBooked = new EventEmitter<Course>();
  @Output() wishListed = new EventEmitter<Course>();

  constructor(private router: Router) {}

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  addToWishList(): void {
    this.wishListed.emit(this.course);
  }

  goToDetails(): void {
    if (!this.course.id) return;
    this.router.navigate(['/courses', this.course.id]);
  }
}
