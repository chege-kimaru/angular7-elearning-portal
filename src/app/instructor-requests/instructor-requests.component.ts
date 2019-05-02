import { Component, OnInit } from '@angular/core';
import { InstructorRequestService } from '../service/instructor-request.service';
import { InstructorRequest } from '../model/instructor.request.model';

@Component({
  selector: 'app-instructor-requests',
  templateUrl: './instructor-requests.component.html',
  styleUrls: ['./instructor-requests.component.css']
})
export class InstructorRequestsComponent implements OnInit {

  constructor(public requestService: InstructorRequestService) { }

  ngOnInit() {
    this.requestService.getRequests();
  }

  selectRequest(request: InstructorRequest) {
    this.requestService.setCurrentRequest(request.id);
  }

}
