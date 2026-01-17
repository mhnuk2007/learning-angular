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

  getCourses(): Observable<Course[]>{
      return this.http.get<Course[]>(`${this.baseUrl}/courses`);
    }


}
