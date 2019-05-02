import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ChoiceService } from '../service/choice.service';
import { QuestionService } from '../service/question.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-choice',
  templateUrl: './add-choice.component.html',
  styleUrls: ['./add-choice.component.css']
})
export class AddChoiceComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private choiceService: ChoiceService, private questionService: QuestionService) { 
    this.form = fb.group({
      'content': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.questionService.addChoice(form.value).subscribe((res: HttpResponse<any>) => {
      this.questionService.setCurrentQuestion(this.questionService.currentQuestion.id);
      form.reset();
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
