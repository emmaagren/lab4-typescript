import { Component, signal, computed } from '@angular/core';
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

  // Signal som lagrar användarens sökfras
  searchTerm = signal('');

  // Signal som håller reda på vilken kolumn som ska sorteras
  sortColumn = signal<keyof Course>('code');

  constructor(private courseService: CourseService) {

    // Hämtar kurserna via servicen
    this.courses = toSignal(this.courseService.getCourses(), {
      initialValue: [] as Course[]
    });
  }

  // Filterar kurser utifrån kurskod och kursnamn
  filteredCourses = computed(() => {
    const search = this.searchTerm().toLowerCase();
    const column = this.sortColumn();

    // Filtrerar kurser efter kurskod och kursnamn
    const filtered = this.courses().filter(course =>
      course.code.toLowerCase().includes(search) ||
      course.coursename.toLowerCase().includes(search)
    );

    // Sorterar kurserna i bokstavsordning
    return filtered.sort((a, b) => 
      a[column].localeCompare(b[column], 'sv')
    );
  });

  // Uppdaterar sökfrasen när användaren skriver
  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  // Ändrar vilken kolumn som används för sortering
  sortCourses(column: keyof Course): void {
    this.sortColumn.set(column);
  }
}