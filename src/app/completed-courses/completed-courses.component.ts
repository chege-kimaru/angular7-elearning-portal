import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getUserCompleteCourses();
  }

}
