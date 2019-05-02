import { Component, OnInit } from '@angular/core';
import { TopicService } from '../service/topic.service';
import { Topic } from '../model/topic.model';

@Component({
  selector: 'app-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.css']
})
export class CourseTopicsComponent implements OnInit {

  isSelected: boolean;

  constructor(public topicService: TopicService) { }

  ngOnInit() {
    
  }

  selectTopic(topic: Topic) {
    this.topicService.setCurrentTopic(topic.id);
  }
}
