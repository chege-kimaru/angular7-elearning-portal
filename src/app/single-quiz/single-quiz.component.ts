import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuizService } from '../service/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../service/question.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-single-quiz',
  templateUrl: './single-quiz.component.html',
  styleUrls: ['./single-quiz.component.css']
})
export class SingleQuizComponent implements OnInit {

  answers = {};

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private location: Location,
    public quizService: QuizService, public questionService: QuestionService, private topicService: TopicService) {
  }

  ngOnInit() {
  }

  onSelect(questionId, choiceId) {
    this.answers[questionId] = choiceId;
  }

  submitQuiz() {
    this.quizService.markQuiz(this.answers).subscribe((res: HttpResponse<any>) => {
      alert(res.body.data);
      this.quizService.setCurrentQuiz(this.quizService.currentQuiz.id);
      this.topicService.setCurrentTopic(this.topicService.currentTopic.id);
    },
      err => {
        alert(err.error.error);
      }
    );;
  }

}
