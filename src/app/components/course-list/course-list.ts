import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CourseService } from '../../services/course';
import type { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  // Signal som innehåller kurserna från JSON-filen
  courses;

  constructor(private courseService: CourseService) {

    // Hämtar kurserna via servicen och omvandlar till en signal
    this.courses = toSignal(this.courseService.getCourses(), {
      initialValue: [] as Course[]
    });
  }
}