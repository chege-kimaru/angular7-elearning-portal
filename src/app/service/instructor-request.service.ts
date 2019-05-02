import { Injectable } from '@angular/core';
import { InstructorRequest } from '../model/instructor.request.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { formatDate } from '../helper/helper.timeformatter';

@Injectable({
  providedIn: 'root'
})
export class InstructorRequestService {

  instructorRequests: InstructorRequest[];
  currentRequest: InstructorRequest;

  constructor(private http: HttpClient) { }

  public sendInstructorRequest(request: InstructorRequest) {
    return this.http.post<InstructorRequest>(constants.base_uri + '/requests', request, { observe: 'response' });
  }

  public confirmInstructorRequest(request: InstructorRequest) {
    return this.http.put<InstructorRequest>(constants.base_uri + '/requests/confirmRequest', request, { observe: 'response' });
  }

  public getRequests() {
    this.http.get<InstructorRequest[]>
      (constants.base_uri + '/requests/')
      .subscribe(instructorRequest => {
        this.instructorRequests = instructorRequest;
        const classUser = new User();
        for (const request of this.instructorRequests) {
          request.user['fullName'] = classUser.getName(request.user['firstName'],
          request.user['middleName'],
          request.user['lastName']);
          request['dateAddedFormatted']= formatDate(request.dateAdded);
        }
      });
    this.currentRequest = null;
  }

  public setCurrentRequest(requestId: number) {
    this.http.get<InstructorRequest>
      (constants.base_uri + '/requests/' + requestId)
      .subscribe(request => {
        this.currentRequest = request;
        if (this.currentRequest.user) {
          const classUser = new User();
          this.currentRequest.user['fullName'] = classUser.getName(this.currentRequest.user['firstName'],
            this.currentRequest.user['middleName'],
            this.currentRequest.user['lastName']);
          this.currentRequest.user['fullAddress'] = classUser.getName(this.currentRequest.user['address'],
            this.currentRequest.user['addressCode'],
            this.currentRequest.user['city']);
        }
      });
  }
}
