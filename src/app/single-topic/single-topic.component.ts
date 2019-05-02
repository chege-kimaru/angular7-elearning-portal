import { Component, OnInit } from '@angular/core';
import { TopicService } from '../service/topic.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CourseService } from '../service/course.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.css']
})
export class SingleTopicComponent implements OnInit {

  constructor(public topicService: TopicService, public courseService: CourseService, private router: Router) { }

  ngOnInit() {
    
  }

  markAsComplete(topicId: number) {
    this.topicService.markAsComplete(topicId).subscribe((res: HttpResponse<any>) => {
      this.topicService.setCurrentTopic(topicId);
      alert(res.body.data);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

  deleteTopic() {
    this.topicService.deleteTopic(this.topicService.currentTopic.id).subscribe((res: HttpResponse<any>) => {
      alert(res.body.data);
      this.courseService.setCurrentCourse(this.courseService.currentCourse.id);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
