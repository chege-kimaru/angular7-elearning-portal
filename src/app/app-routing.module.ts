import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllCoursesComponent} from './all-courses/all-courses.component';
import {SingleCourseComponent} from './single-course/single-course.component';
import {SingleTopicComponent} from './single-topic/single-topic.component';
import {SingleQuizComponent} from './single-quiz/single-quiz.component';
import {MyCoursesComponent} from './my-courses/my-courses.component';
import {InstructorsComponent} from './instructors/instructors.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ApplyInstructorComponent } from './apply-instructor/apply-instructor.component';
import { InstructorRequestsComponent } from './instructor-requests/instructor-requests.component';
import { SingleInstructorRequestComponent } from './single-instructor-request/single-instructor-request.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NTopicQuizesComponent } from './n-topic-quizes/n-topic-quizes.component';
import { NQuizQuestionsComponent } from './n-quiz-questions/n-quiz-questions.component';
import { NQuestionChoicesComponent } from './n-question-choices/n-question-choices.component';
import { ChatComponent } from './chat/chat.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'n-topic-quizes/:topicId', component: NTopicQuizesComponent, children:[
        {path: 'n-quiz-questions/:quizId', component: NQuizQuestionsComponent, children:[
            {path: 'n-question-choices/:questionId', component: NQuestionChoicesComponent}
        ]},
    ]},
    {
        path: 'home', component: DashboardComponent,  children: [
            {path: 'account', component: AccountComponent},
            {path: 'edit-profile', component: EditUserComponent},
            {path: 'apply-instructor', component: ApplyInstructorComponent},
            {path: 'courses', component: AllCoursesComponent},
            {path: 'admin-courses', component: AdminCoursesComponent},
            {path: 'courses/:courseId', component: SingleCourseComponent},
            {path: 'mycourses', component: MyCoursesComponent},
            {path: 'instructors', component: InstructorsComponent},
            {path: 'requests', component: InstructorRequestsComponent},
            {path: 'notifications', component: NotificationsComponent},
        ]
    },
    {path: '', redirectTo: '/home/account', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
