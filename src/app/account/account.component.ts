import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CourseService } from '../service/course.service';
import { constants } from '../constants';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  imageUrl: string = constants.base_uri + '/users/updateProfilePic';

  constructor(public authService: AuthService, public courseService: CourseService) { }

  ngOnInit() {
    this.authService.setLoggedInUser();
  }

  onUploadFinished(img: any) {
    this.authService.setLoggedInUser().then(() => {
      img.src = this.authService.loggedInUser.imageUrl;
      console.log(img);
    });
  }

}
