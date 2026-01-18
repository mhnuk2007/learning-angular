import { Component, OnInit, signal } from '@angular/core';
import { CourseCard } from "../course-card/course-card";
import { Course } from '../model/course.model';
import { CourseService } from '../services/course';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to query params and load courses accordingly
    this.route.queryParamMap.subscribe(params => {
      const desc = params.get('description');
      this.loadCourses(desc); 
    });
    console.log('CoursesList component initialized.');
  }

  loadCourses(description?: string | null) {
    console.log('Loading courses...', description ? `Filtering by: ${description}` : 'All courses');
    return this.courseService.getCourses(description).subscribe({
      next: (data) => {
        this.courses.set(data);
        console.log('Courses loaded successfully:', data);
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    });
  }

  onCourseBooked(course: Course): void {
    alert('Course booked successfully: ' + course.title);
  }

  addToWishList(course: Course): void {
    this.wishedCourses.push(course);
  }
}
