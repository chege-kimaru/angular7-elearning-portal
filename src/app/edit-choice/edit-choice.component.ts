import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ChoiceService } from '../service/choice.service';
import { QuestionService } from '../service/question.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-choice',
  templateUrl: './edit-choice.component.html',
  styleUrls: ['./edit-choice.component.css']
})
export class EditChoiceComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private choiceService: ChoiceService, private questionService: QuestionService) { 
    this.form = fb.group({
      'content': [''],
      'isAnswer': ['']
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    form.value.id = this.choiceService.currentChoice.id;
    this.questionService.updateChoice(form.value).subscribe((res: HttpResponse<any>) => {
      this.choiceService.getQuestionChoices(this.questionService.currentQuestion.id);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
