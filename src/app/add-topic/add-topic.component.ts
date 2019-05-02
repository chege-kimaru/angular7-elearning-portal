import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TopicService } from '../service/topic.service';
import { HttpResponse } from '@angular/common/http';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private courseService: CourseService, private topicService: TopicService) { 
    this.form = fb.group({
      'topicNo': ['', Validators.compose([Validators.required])],
      'title': ['', Validators.compose([Validators.required])],
      'content': ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.courseService.addTopic(form.value).subscribe((res: HttpResponse<any>) => {
      this.topicService.getCourseTopics(this.courseService.currentCourse.id);
      alert(res.body.data);
      form.reset();
    },
      err => {
        alert(err.error.error);
      }
    );
  }
}
