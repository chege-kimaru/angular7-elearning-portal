import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CourseService } from '../service/course.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private courseService: CourseService, private authService: AuthService) { 
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [''],
      'shown': ['']
    });
  }

  onSubmit(form: NgForm) {
    form.value.id = this.courseService.currentCourse.id;
    this.courseService.updateCourse(form.value).subscribe((res: HttpResponse<any>) => {
      this.courseService.setCurrentCourse(this.courseService.currentCourse.id);
      alert(res.body.data);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
