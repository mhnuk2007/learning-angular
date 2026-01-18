import { Component, OnInit, signal } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  course = signal<Course | null>(null);

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      const id = +idStr;
      this.loadCourseById(id);
    }
  }

  loadCourseById(id: number) {
    this.courseService.getCourseById(id).subscribe({
      next: (data) => {
        this.course.set(data);
        console.log('Course loaded successfully:', data);
      },
      error: (error) => {
        console.error('Error loading course:', error);
      }
    });
  }
}
