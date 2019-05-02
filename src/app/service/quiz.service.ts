import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../model/quiz.model';
import { constants } from '../constants';
import { QuestionService } from './question.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  topicQuizes: Quiz[];
  currentQuiz: Quiz;

  constructor(private http: HttpClient, private questionService: QuestionService) { }

  public addQuestion(question: Question) {
    question.quiz = this.currentQuiz.id;
    return this.http.post<Question>(constants.base_uri + '/questions', question,
          { observe: 'response' });
  }

  public updateQuestion(question: Question) {
    return this.http.put<Question>(constants.base_uri + '/questions', question,
          { observe: 'response' });
  }

  public getTopicQuizes(topicId: number) {
    this.http.get<Quiz[]>
      (constants.base_uri + '/quizes/getTopicQuizes/' + topicId)
      .subscribe(quizes => {
        this.topicQuizes = quizes;
      });
  }

  public setCurrentQuiz(quizId: number) {
    this.http.get<Quiz>
      (constants.base_uri + '/quizes/' + quizId)
      .subscribe(quiz => {
        this.currentQuiz = quiz;

        this.questionService.getQuestionsForQuiz(this.currentQuiz.id);
      });
  }

  public markQuiz(answers) {
    let data = {};
    data['answers'] = answers;
    data['quiz'] = this.currentQuiz.id;
    return this.http.post
      (constants.base_uri + '/quizes/markQuiz', data, {observe: 'response'});
  }
}
