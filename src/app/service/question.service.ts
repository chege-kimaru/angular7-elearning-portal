import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question.model';
import { constants } from '../constants';
import { Subject } from 'rxjs';
import { ChoiceService } from './choice.service';
import { Choice } from '../model/choice.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionsForQuiz: Question[];
  currentQuestion: Question;

  constructor(private http:HttpClient, private choiceService: ChoiceService) { }

  public addChoice(choice: Choice) {
    choice.question = this.currentQuestion.id;
    return this.http.post<Choice>(constants.base_uri + '/choices', choice,
          { observe: 'response' });
  }

  public updateChoice(choice: Choice) {
    return this.http.put<Choice>(constants.base_uri + '/choices', choice,
          { observe: 'response' });
  }

  public getQuestionsForQuiz(quizId) {
    this.http.get<Question[]>(constants.base_uri + '/questions/getQuestionsForQuiz/' + quizId).subscribe(questions => {
      this.questionsForQuiz = questions;
    });
  }

  public setCurrentQuestion(questionId) {
    this.http.get<Question>(constants.base_uri + '/questions/' + questionId).subscribe(question => {
      this.currentQuestion = question;
      this.choiceService.getQuestionChoices(this.currentQuestion.id);
    });
  }

  public deleteQuestion(questionId: number) {
    return this.http.delete(constants.base_uri + '/questions/' + questionId);
  }
}
