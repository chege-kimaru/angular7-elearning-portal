import { Component, OnInit } from '@angular/core';
import { InstructorRequestService } from '../service/instructor-request.service';
import { InstructorRequest } from '../model/instructor.request.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-single-instructor-request',
  templateUrl: './single-instructor-request.component.html',
  styleUrls: ['./single-instructor-request.component.css']
})
export class SingleInstructorRequestComponent implements OnInit {

  constructor(public requestService: InstructorRequestService) { }

  ngOnInit() {
  }

  confirm(requestId: number) {
    let req = new InstructorRequest();
    req.id = requestId;
    req.accepted = 1;
    this.submit(req);
  }

  reject(requestId: number) {
    let req = new InstructorRequest();
    req.id = requestId;
    req.accepted = 0;
    this.submit(req);
  }

  submit(request: InstructorRequest) {
    this.requestService.confirmInstructorRequest(request).subscribe((res: HttpResponse<any>) => {
      alert(res.body.data);
      this.requestService.getRequests();
      this.requestService.setCurrentRequest(request.id);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
