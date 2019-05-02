import { Injectable } from '@angular/core';
import { Chat } from '../model/chat.model';
import { HttpClient } from '@angular/common/http';
import { constants } from '../constants';
import { CourseService } from './course.service';
import { formatDate } from '../helper/helper.timeformatter';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  courseChats: Chat[];

  constructor(private http:HttpClient) { }

  public addChat(chat: Chat) {
    return this.http.post<Chat>(constants.base_uri + '/chats', chat,
          { observe: 'response' });
  }

  public getChatsForCourse(courseId: number) {
    this.http.get<Chat[]>(constants.base_uri + '/chats/getChatsForCourse/' + courseId)
    .subscribe(chats => {
      this.courseChats = chats;
      for (const chat of this.courseChats) {
        chat.dateAddedFormatted = formatDate(chat.dateAdded);
      }
    });
  }
}
