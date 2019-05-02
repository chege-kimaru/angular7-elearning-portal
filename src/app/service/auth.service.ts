import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { constants } from '../constants';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InstructorRequest } from '../model/instructor.request.model';
import { CourseService } from './course.service';
import { resolve } from 'bluebird';

@Injectable()
export class AuthService {

    loggedInUser: User;
    instructors: User[];

    constructor(private http: HttpClient, private router: Router, private courseService: CourseService) {
    }

    public getInstructors() {
        this.http.get<User[]>
          (constants.base_uri + '/users/instructors')
          .subscribe(instructors => {
            this.instructors = instructors;
            for(let instructor of this.instructors) {
                instructor.imageUrl = constants.base_uri + '/users/images?imageUrl=' + instructor.imageUrl;
            }
          });
      }

    public setLoggedInUser() {
        return new Promise(resolve => {
            this.http.get<User>(constants.base_uri + '/users/getLoggedInUser')
            .subscribe(user => {
                this.loggedInUser = user;
                this.courseService.getInstructorCourses(this.loggedInUser.id);
                let classUser = new User;
                this.loggedInUser.imageUrl = constants.base_uri + '/users/images?imageUrl=' + this.loggedInUser.imageUrl;
                this.loggedInUser.fullName = classUser.getName(this.loggedInUser.firstName,
                    this.loggedInUser.middleName,
                    this.loggedInUser.lastName);
                this.loggedInUser.fullAddress = classUser.getName(this.loggedInUser.address,
                    this.loggedInUser.addressCode,
                    this.loggedInUser.city);
                this.loggedInUser.roleName = classUser.getRoleName(this.loggedInUser.role);

                resolve();
            });
        })
    }

    public editUser(user: User) {
        return this.http.put<User>(constants.base_uri + '/users', user,
            { observe: 'response' });
    }

    public register(user: User) {
        const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.http.post<User>(constants.base_uri + '/users', user,
            { headers: reqHeader, observe: 'response' });
    }

    public login(user: User) {
        const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.http.post<User>(constants.base_uri + '/auth/login', user,
            { headers: reqHeader, observe: 'response' });
    }

    public onLogin(res: HttpResponse<any>) {
        localStorage.setItem('token', res.body.token);
        localStorage.setItem('role', res.body.role);
        localStorage.setItem('userId', res.body.id);

        this.router.navigate(['home/account']);
    }

    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        this.loggedInUser = null;

        this.router.navigate(['login']);
    }

    public isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    public isAdmin() {
        return localStorage.getItem('role') === '1';
    }

    public isInstructor() {
        return localStorage.getItem('role') === '2';
    }

}
