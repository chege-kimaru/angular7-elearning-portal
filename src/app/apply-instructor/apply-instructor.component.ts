import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { InstructorRequestService } from '../service/instructor-request.service';

@Component({
  selector: 'app-apply-instructor',
  templateUrl: './apply-instructor.component.html',
  styleUrls: ['./apply-instructor.component.css']
})
export class ApplyInstructorComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private requestService: InstructorRequestService, private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {
    if(!this.authService.isLoggedIn) this.router.navigate(['login']);

    this.form = this.fb.group({
      'topic': ['', Validators.compose([Validators.required])],
      'details': ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit(form: NgForm) {
    this.requestService.sendInstructorRequest(form.value).subscribe((res: HttpResponse<any>) => {
      alert(res.body.data);
      this.router.navigate(['home/account']);
    },
      err => {
        alert(err.error.error);
      } 
    );
  }

}
