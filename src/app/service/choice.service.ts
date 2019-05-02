import { Injectable } from '@angular/core';
import { Choice } from '../model/choice.model';
import { HttpClient } from '@angular/common/http';
import { constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  questionChoices: Choice[];
  currentChoice: Choice;

  constructor(private http: HttpClient) { }

  public getQuestionChoices(questionId: number) {
    this.http.get<Choice[]>
      (constants.base_uri + '/choices/getChoicesForQuestion/' + questionId)
      .subscribe(choices => {
        this.questionChoices = choices;
      });
  }

  public deleteChoice(choiceId: number) {
    return this.http.delete(constants.base_uri + '/choices/' + choiceId);
  }
}
