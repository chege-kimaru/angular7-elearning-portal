import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { HttpResponse } from '@angular/common/http';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  selectedNotification: Notification;

  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getUserNotifications();
  }

  setViewed(notification: Notification) {
    this.selectedNotification = notification;
    this.notificationService.setViewed(notification.id).subscribe((res:HttpResponse<any>) => {
      notification.viewed = true;
    }, err => {
      alert(err.error.error);
    })
  }

}
