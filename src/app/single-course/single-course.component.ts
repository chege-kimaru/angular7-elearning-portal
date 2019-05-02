import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TopicService } from '../service/topic.service';
import { constants } from '../constants';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})


export class SingleCourseComponent implements OnInit {

  imageUrl: string = constants.base_uri + '/courses/updateCoursePic/';

  constructor(private route: ActivatedRoute,
     public courseService: CourseService,
     public topicService:TopicService,
     private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('courseId');
    this.courseService.setCurrentCourse(id); 
  }

  onUploadFinished(img: any) {
    this.courseService.setCurrentCourse(this.courseService.currentCourse.id).then(() => {
      console.log(this.courseService.currentCourse);
      img.src = this.courseService.currentCourse.imageUrl;
    });
  }

  registerCourse() {
    if (this.courseService.currentCourse)
      this.courseService.registerForCourse().subscribe((res: any) => {
        this.courseService.currentCourse.registered = true;
        alert(res.data);
      }, (err:HttpErrorResponse) => {
        alert(err.error.error);
      });
    else
      alert('Please choose a course to register for.');
  } 

  deleteCourse() {
    if (this.courseService.currentCourse)
      this.courseService.deleteCourse(this.courseService.currentCourse.id).subscribe((res: any) => {
        alert(res.data);
        this.router.navigateByUrl('/home/courses');
      }, (err:HttpErrorResponse) => {
        alert(err.error.error);
      });
    else
      alert('Please choose a course to register for.');
  }
}
