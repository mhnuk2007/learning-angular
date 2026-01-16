import { Component } from '@angular/core';
import { CourseCard } from "../course-card/course-card";

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList {
  title = 'Available Courses';

  ngOnInit(): void {
    console.log('CoursesList component initialized.');
  }

  courses = [
    {id: 1, name: 'Introduction to Angular', description:'Learn the basics of Angular framwork.', price: 49, date: '2025-03-01', soldOut: false, onSale: true, imgUrl:'angularlogo.svg' },
    {id: 2, name: 'Advance Angular', description:'Deep dive into advanced Angular topics.', price: 99, date: '2025-04-15', soldOut: true, onSale: false, imgUrl:'angularlogo.svg' },
    {id: 3, name: 'Introduction to RxJS', description:'Learn reactive programming with RxJS.', price: 39, date: '2025-05-10', soldOut: false, onSale: false, imgUrl:'rxjs.png' },
  ]

  onCourseBooked(course: any): void {
    alert('Course booked successfully: ' + course.name);
  };



}
