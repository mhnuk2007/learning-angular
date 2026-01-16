import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList {
  title = 'Available Courses';

  courses = [
    {id: 1, name: 'Introduction to Angular', description:'Learn the basics of Angular framwork.', price: 49, date: '2025-03-01', soldOut: false, imgUrl:'angularlogo.svg' },
    {id: 2, name: 'Advance Angular', description:'Deep dive into advanced Angular topics.', price: 99, date: '2025-04-15', soldOut: true, imgUrl:'angularlogo.svg' },
  ]

}
