import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';
import { constants } from '../constants';
import { formatDate } from '../helper/helper.timeformatter';
import { TopicService } from './topic.service';
import { Topic } from '../model/topic.model';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  allUserDisplayCourses: Course[];
  currentCourse: Course;
  instructorCourses: Course[];
  userCompletedCourses: Course[];
  userIncompleteCourses: Course[];
  adminCourses: Course[];

  constructor(private http: HttpClient,
    private topicService: TopicService, private chatService: ChatService) { }

  public activateCourse(course: Course) {
    return this.http.put<Course>(constants.base_uri + '/courses/activateCourse', course,
          { observe: 'response' });
  }

  public deleteCourse(courseId: number) {
    return this.http.delete(constants.base_uri + '/courses/' + courseId);
  }

  public suspendCourse(course: Course) {
    return this.http.put<Course>(constants.base_uri + '/courses/suspendCourse', course,
          { observe: 'response' });
  }

  public addCourse(course: Course) {
    return this.http.post<Course>(constants.base_uri + '/courses', course,
          { observe: 'response' });
  }

  public updateCourse(course: Course) {
    return this.http.put<Course>(constants.base_uri + '/courses', course,
          { observe: 'response' });
  }

  public getAvailableCourses() {
    this.http.get<Course[]>(constants.base_uri + '/courses/getUserDisplayCourses').subscribe(courses => {
      this.allUserDisplayCourses = courses;
      for (const course of this.allUserDisplayCourses) {
        course.imageUrl = constants.base_uri + '/courses/images?imageUrl=' + course.imageUrl;
      }
    });
  }

  public getAdminCourses() {
    this.http.get<Course[]>(constants.base_uri + '/courses').subscribe(courses => {
      this.adminCourses = courses;
      for (const course of this.adminCourses) {
        course.imageUrl = constants.base_uri + '/courses/images?imageUrl=' + course.imageUrl;
      }
    });
  }

  public getUserCompleteCourses() {
    this.http.get<Course[]>(constants.base_uri + '/courses/getUserCompleteCourses').subscribe(courses => {
      this.userCompletedCourses = courses;
      for (const course of this.userCompletedCourses) {
        course.imageUrl = constants.base_uri + '/courses/images?imageUrl=' + course.imageUrl;
      }
    });
  }

  public getUserIncompleteCourses() {
    this.http.get<Course[]>(constants.base_uri + '/courses/getUserIncompleteCourses').subscribe(courses => {
      this.userIncompleteCourses = courses;
      for (const course of this.userIncompleteCourses) {
        course.imageUrl = constants.base_uri + '/courses/images?imageUrl=' + course.imageUrl;
      }
    });
  }

  public getInstructorCourses(instructorId) {
    this.http.get<Course[]>(constants.base_uri + '/courses/getInstructorCourses/' + instructorId).subscribe(courses => {
      this.instructorCourses = courses;
      for (const course of this.instructorCourses) {
        course.imageUrl = constants.base_uri + '/courses/images?imageUrl=' + course.imageUrl;
      }
    });
  }

  public setCurrentCourse(id) {
    return new Promise(resolve => {
      this.http.get<Course>(constants.base_uri + '/courses/' + id).subscribe(course => {
        const classCourse = new Course;
        this.currentCourse = course;
        this.currentCourse.imageUrl = constants.base_uri + '/courses/images?imageUrl=' + this.currentCourse.imageUrl;
        this.currentCourse.formattedDateAdded = formatDate(this.currentCourse.dateAdded);
  
        this.topicService.getCourseTopics(this.currentCourse.id);
        this.chatService.getChatsForCourse(this.currentCourse.id);
        resolve();
      });
    })
  }

  public registerForCourse(): Observable<any> {
    return this.http.post(constants.base_uri + '/courses/registerForCourse/' + this.currentCourse.id, null);
  }

  public addTopic(topic: Topic) {
    topic.course = this.currentCourse.id;
    return this.http.post<Topic>(constants.base_uri + '/topics', topic,
          { observe: 'response' });
  }

  public updateTopic(topic: Topic) {
    return this.http.put<Topic>(constants.base_uri + '/topics', topic,
          { observe: 'response' });
  }
}
