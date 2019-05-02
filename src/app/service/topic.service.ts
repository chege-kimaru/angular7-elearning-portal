import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../model/topic.model';
import { constants } from '../constants';
import { QuizService } from './quiz.service';
import { CourseService } from './course.service';
import { Quiz } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  courseTopics: Topic[];
  currentTopic: Topic;

  constructor(private http: HttpClient,
    private quizService: QuizService) { }

  public addQuiz(quiz: Quiz) {
    quiz.topic = this.currentTopic.id;
    return this.http.post<Topic>(constants.base_uri + '/quizes', quiz,
          { observe: 'response' });
  }

  public deleteTopic(topicId: number) {
    return this.http.delete(constants.base_uri + '/topics/' + topicId);
  }

  public updateQuiz(quiz: Quiz) {
    return this.http.put<Topic>(constants.base_uri + '/quizes', quiz,
          { observe: 'response' });
  }

  public markAsComplete(topicId: number) {
    return this.http.post<Topic>(constants.base_uri + '/topics/setTopicCompleted/' + topicId, null,
          { observe: 'response' });
  }

  public getCourseTopics(courseId: number, initialize:boolean = true) {
    this.http.get<Topic[]>
      (constants.base_uri + '/topics/getCourseTopics/' + courseId)
      .subscribe(topics => {
        this.courseTopics = topics;
        if(initialize) {
          if (this.courseTopics.length > 0) {
            this.setCurrentTopic(this.courseTopics[0].id);
          } else {
            this.currentTopic = null;
          }
        }
      });
  }

  public setCurrentTopic(topicId: number) {
    this.http.get<Topic>
      (constants.base_uri + '/topics/' + topicId)
      .subscribe(topic => {
        this.currentTopic = topic;

        this.quizService.getTopicQuizes(this.currentTopic.id);
      });
  }
}
