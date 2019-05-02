import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { QuizService } from '../service/quiz.service';
import { TopicService } from '../service/topic.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private quizService: QuizService, private topicService: TopicService) { 
    this.form = fb.group({
      'title': [''],
      'shown': [''],
      'must': ['']
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    form.value.id = this.quizService.currentQuiz.id;
    this.topicService.updateQuiz(form.value).subscribe((res: HttpResponse<any>) => {
      this.topicService.setCurrentTopic(this.topicService.currentTopic.id);
      this.quizService.setCurrentQuiz(this.quizService.currentQuiz.id);
      alert(res.body.data);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
