import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../service/quiz.service';
import { QuestionService } from '../service/question.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-n-quiz-questions',
  templateUrl: './n-quiz-questions.component.html',
  styleUrls: ['./n-quiz-questions.component.css']
})
export class NQuizQuestionsComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private quizService: QuizService, 
    public questionService: QuestionService) { 
      router.routeReuseStrategy.shouldReuseRoute=()=> false;
    }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('quizId');
    this.quizService.setCurrentQuiz(id);
  }

  delete(questionId: number) {
    this.questionService.deleteQuestion(questionId).subscribe((res: any) => {
      this.quizService.setCurrentQuiz(this.quizService.currentQuiz.id);
    }, (err:HttpErrorResponse) => {
      alert(err.error.error);
    });
  }

}
