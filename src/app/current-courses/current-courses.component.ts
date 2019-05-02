import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-current-courses',
  templateUrl: './current-courses.component.html',
  styleUrls: ['./current-courses.component.css']
})
export class CurrentCoursesComponent implements OnInit {

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getUserIncompleteCourses();
  }

}
