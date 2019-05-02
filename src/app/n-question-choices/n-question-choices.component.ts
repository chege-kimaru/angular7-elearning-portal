import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../service/question.service';
import { ChoiceService } from '../service/choice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-n-question-choices',
  templateUrl: './n-question-choices.component.html',
  styleUrls: ['./n-question-choices.component.css']
})
export class NQuestionChoicesComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private questionService: QuestionService, 
    public choiceService: ChoiceService) {
      router.routeReuseStrategy.shouldReuseRoute=()=> false;
     }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('questionId');
    this.questionService.setCurrentQuestion(id);
  }

  setCurrentChoice(choice) {
    this.choiceService.currentChoice = choice;
  }

  delete(choiceId: number) {
    this.choiceService.deleteChoice(choiceId).subscribe((res: any) => {
      this.questionService.setCurrentQuestion(this.questionService.currentQuestion.id);
    }, (err:HttpErrorResponse) => {
      alert(err.error.error);
    });
  }
}
