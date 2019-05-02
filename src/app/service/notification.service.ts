import { Injectable } from '@angular/core';
import { Notification } from '../model/notification.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '../helper/helper.timeformatter';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  userNotifications: Notification[];

  constructor(private http:HttpClient) { }

  public getUserNotifications() {
    this.http.get<Notification[]>
      (constants.base_uri + '/notifications/getUserNotifications')
      .subscribe(userNotifications => {
        this.userNotifications = userNotifications;
        for (const notification of this.userNotifications) {
          notification.dateAddedFormatted = formatDate(notification.dateAdded);
        }
      });
  }

  public setViewed(notificationId: number) {
    let notification = new Notification();
    notification.id = notificationId;
    console.log('NotificationId: ', notificationId);
    return this.http.put<Notification>(constants.base_uri + '/notifications/setViewed', notification, { observe: 'response' });
  }
}
