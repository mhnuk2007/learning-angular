import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  // Fetch existing courses from the API
  getCourses(): Observable<Course[]>{
      return this.http.get<Course[]>(`${this.baseUrl}/courses`);
    }

  // Add a new course
  addCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }


}
