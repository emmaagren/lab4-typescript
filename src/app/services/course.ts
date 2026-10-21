import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  // Sökväg till JSON-filen
  private url: string = '/ramschema.json';

  constructor(private http: HttpClient) {}

  // Hämtar kurserna från JSON-filen
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
