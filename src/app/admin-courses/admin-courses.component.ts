import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/course.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getAdminCourses();
  }

  activate(courseId: number) {
    const course = new Course();
    course.id = courseId;
    this.courseService.activateCourse(course).subscribe((res: HttpResponse<any>) => {
      this.courseService.getAdminCourses();
      alert(res.body.data);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

  suspend(courseId: number) {
    const course = new Course();
    course.id = courseId;
    this.courseService.suspendCourse(course).subscribe((res: HttpResponse<any>) => {
      this.courseService.getAdminCourses();
      alert(res.body.data);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
