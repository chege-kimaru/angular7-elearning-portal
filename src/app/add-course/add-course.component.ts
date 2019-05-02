import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CourseService } from '../service/course.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private courseService: CourseService, private authService: AuthService) { 
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.courseService.addCourse(form.value).subscribe((res: HttpResponse<any>) => {
      this.authService.setLoggedInUser();
      alert(res.body.data);
      form.reset();
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
