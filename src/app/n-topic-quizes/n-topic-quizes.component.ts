import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../service/topic.service';
import { QuizService } from '../service/quiz.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-n-topic-quizes',
  templateUrl: './n-topic-quizes.component.html',
  styleUrls: ['./n-topic-quizes.component.css']
})
export class NTopicQuizesComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private topicService: TopicService, 
    public quizService: QuizService) {
        router.routeReuseStrategy.shouldReuseRoute=()=> false;
     }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('topicId');
    this.topicService.setCurrentTopic(id);
  }

  goBack(): void {
    this.router.navigateByUrl('/home/courses/' + this.topicService.currentTopic.course);
  }


}
