import { Component, OnInit, signal } from '@angular/core';
import { CourseCard } from "../course-card/course-card";
import { Course } from '../model/course.model';
import { CourseService } from '../services/course';


@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  title = 'Available Courses';
  courses = signal<Course[]>([]);
  bookedCourses: Course[] = [];
  wishedCourses: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
    console.log('CoursesList component initialized.');
  }

  loadCourses() {
    console.log('Loading courses...');
    return this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses.set(data) ;
        console.log('Courses loaded successfully.');
      },
      error: (error) => {
        console.error('Error loading courses:', error);

      }

    });

  }



  onCourseBooked(course: Course): void {
    alert('Course booked successfully: ' + course.title);
  };

  addToWishList(course: Course): void {
    this.wishedCourses.push(course);

  }



}
