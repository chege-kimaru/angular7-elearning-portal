import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { QuizService } from '../service/quiz.service';
import { HttpResponse } from '@angular/common/http';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private quizService: QuizService, private topicService: TopicService) { 
    this.form = fb.group({
      'title': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.topicService.addQuiz(form.value).subscribe((res: HttpResponse<any>) => {
      this.topicService.setCurrentTopic(this.topicService.currentTopic.id);
      alert(res.body.data);
      form.reset();
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
