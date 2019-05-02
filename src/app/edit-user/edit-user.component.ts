import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {
    if(this.authService.loggedInUser == null) this.router.navigate(['login']);

    this.form = this.fb.group({
      'id': ['', Validators.compose([Validators.required])],
      'firstName': ['', Validators.compose([Validators.required])],
      'middleName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'idNumber': ['', Validators.compose([Validators.required])],
      'phoneNumber': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'addressCode': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(form: NgForm) {
    this.authService.editUser(form.value).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['home/account']);
    },
      err => {
        alert(err.error.error);
      }
    );
  }

}
