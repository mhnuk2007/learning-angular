import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList {
  title = 'Available Courses';

  ngOnInit(): void {
    console.log('CoursesList component initialized.');
  }

  courses = [
    {id: 1, name: 'Introduction to Angular', description:'Learn the basics of Angular framwork.', price: 49, date: '2025-03-01', soldOut: false, imgUrl:'angularlogo.svg' },
    {id: 2, name: 'Advance Angular', description:'Deep dive into advanced Angular topics.', price: 99, date: '2025-04-15', soldOut: true, imgUrl:'angularlogo.svg' },
  ]

  viewDetails(title: string): void {
    alert(`You have selected the course: ${title}`);
  }

}
