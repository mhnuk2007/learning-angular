import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Fetch courses with optional filtering
  getCourses(description?: string | null): Observable<Course[]> {
    if (!description) {
      return this.http.get<Course[]>(`${this.baseUrl}/courses`);
    }

    // Use 'description_like' for partial match (case-insensitive)
    return this.http.get<Course[]>(`${this.baseUrl}/courses?description_like=${description}`);
  }

  // Fetch a single course by ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  // Add a new course
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }

  // GET all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  // POST add a student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, student);
  }

}
