import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirmPassword');

  if (!pwd || !cpwd) return;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  } 
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  get cpwd() {
    return this.form.get('confirmPassword');
  }

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'middleName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'idNumber': ['', Validators.compose([Validators.required])],
      'phoneNumber': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'addressCode': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
      'confirmPassword': ['', Validators.compose([Validators.required, passwordConfirming])],
    });
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    delete form.value.confirmPassword;
    this.authService.register(form.value).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['login']);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
