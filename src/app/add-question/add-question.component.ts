import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { QuizService } from '../service/quiz.service';
import { QuestionService } from '../service/question.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private quizService: QuizService, private questionService: QuestionService) { 
    this.form = fb.group({
      'content': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.quizService.addQuestion(form.value).subscribe((res: HttpResponse<any>) => {
      this.quizService.setCurrentQuiz(this.quizService.currentQuiz.id);
      form.reset();
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
