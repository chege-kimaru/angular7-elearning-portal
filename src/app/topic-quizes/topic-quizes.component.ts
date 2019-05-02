import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { AuthService } from '../service/auth.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-topic-quizes',
  templateUrl: './topic-quizes.component.html',
  styleUrls: ['./topic-quizes.component.css']
})
export class TopicQuizesComponent implements OnInit {

  constructor(public quizService: QuizService, public courseService: CourseService) { }

  ngOnInit() {
    
  }

  setCurrentQuiz(quizId: number){
    this.quizService.setCurrentQuiz(quizId);
  }

}
