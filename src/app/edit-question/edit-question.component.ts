import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { QuizService } from '../service/quiz.service';
import { QuestionService } from '../service/question.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private quizService: QuizService, private questionService: QuestionService) { 
    this.form = fb.group({
      'content': ['']
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    form.value.id = this.questionService.currentQuestion.id
    this.quizService.updateQuestion(form.value).subscribe((res: HttpResponse<any>) => {
      this.quizService.setCurrentQuiz(this.quizService.currentQuiz.id);
      this.questionService.setCurrentQuestion(this.questionService.currentQuestion.id);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
