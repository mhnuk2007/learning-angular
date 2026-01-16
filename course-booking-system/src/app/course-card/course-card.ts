import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<Course>();
  @Output() wishListed = new EventEmitter<Course>();

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }
  addToWishList(): void {
    this.wishListed.emit(this.course);;
  }
}
