import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../service/chat.service';

import * as io from "socket.io-client";
import { constants } from '../constants';
import { CourseService } from '../service/course.service';
import { Chat } from '../model/chat.model';
import { AuthService } from '../service/auth.service';
import { HttpResponse } from '@angular/common/http';
import { formatDate } from '../helper/helper.timeformatter';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  socket = io(constants.base_uri);
  message: string;

  constructor(private chatService: ChatService, private courseService: CourseService, private authService: AuthService) { }

  ngOnInit() {
    this.scrollToBottom();
    this.authService.setLoggedInUser();
    this.socket.on('new-message',  data => {
      const chat = this.chatService.courseChats.find(chat => chat.id == data.id);
      console.log(chat);
      if(data.course == this.courseService.currentCourse.id && !chat) {
        data.dateAddedFormatted = formatDate(data.dateAdded);
        this.chatService.courseChats.push(data);
        this.scrollToBottom();
      }
    });
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }                 
  }

  sendMessage() {
    if(this.message == '' || this.message == null) {    
      return;
    }
    let chat  = new Chat();
    chat.user = this.authService.loggedInUser.id;
    chat.username = this.authService.loggedInUser.fullName;
    chat.course = this.courseService.currentCourse.id;
    chat.message = this.message;

    // this.chatService.addChat(chat).subscribe((res: HttpResponse<any>) => {
    //   this.socket.emit('save-message', chat);
    //   // alert('Success');
    //   this.message = '';
    //   this.scrollToBottom();   
    // }, err => {
    //   alert(err.error.error)
    // })
    this.socket.emit('save-message', chat);
    // alert('Success');
    this.message = '';
    this.scrollToBottom();
  }

}
