import { Component, signal } from '@angular/core';
import { CourseList } from './components/course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('laboration-4');
}
