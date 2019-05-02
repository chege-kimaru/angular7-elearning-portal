import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService:AuthService, private fb: FormBuilder) { 
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe((res: HttpResponse<any>) => {
      this.authService.onLogin(res);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
