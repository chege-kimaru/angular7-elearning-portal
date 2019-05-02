import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ImageUploadModule } from "angular2-image-upload";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { CourseTopicsComponent } from './course-topics/course-topics.component';
import { SingleTopicComponent } from './single-topic/single-topic.component';
import { TopicQuizesComponent } from './topic-quizes/topic-quizes.component';
import { SingleQuizComponent } from './single-quiz/single-quiz.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CompletedCoursesComponent } from './completed-courses/completed-courses.component';
import { CurrentCoursesComponent } from './current-courses/current-courses.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UnauthorizedErrorInterceptor } from './interceptor/unauthorized.error.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { CourseService } from './service/course.service';
import { TopicService } from './service/topic.service';
import { ApplyInstructorComponent } from './apply-instructor/apply-instructor.component';
import { InstructorRequestsComponent } from './instructor-requests/instructor-requests.component';
import { SingleInstructorRequestComponent } from './single-instructor-request/single-instructor-request.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { NTopicQuizesComponent } from './n-topic-quizes/n-topic-quizes.component';
import { NQuizQuestionsComponent } from './n-quiz-questions/n-quiz-questions.component';
import { NQuestionChoicesComponent } from './n-question-choices/n-question-choices.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddChoiceComponent } from './add-choice/add-choice.component';
import { ChatComponent } from './chat/chat.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { EditChoiceComponent } from './edit-choice/edit-choice.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AccountComponent,
        AllCoursesComponent,
        SingleCourseComponent,
        CourseTopicsComponent,
        SingleTopicComponent,
        TopicQuizesComponent,
        SingleQuizComponent,
        MyCoursesComponent,
        CompletedCoursesComponent,
        CurrentCoursesComponent,
        InstructorsComponent,
        LoginComponent,
        RegisterComponent,
        EditUserComponent,
        ApplyInstructorComponent,
        InstructorRequestsComponent,
        SingleInstructorRequestComponent,
        NotificationsComponent,
        AddCourseComponent,
        AddTopicComponent,
        NTopicQuizesComponent,
        NQuizQuestionsComponent,
        NQuestionChoicesComponent,
        AddQuizComponent,
        AddQuestionComponent,
        AddChoiceComponent,
        ChatComponent,
        EditCourseComponent,
        EditTopicComponent,
        EditQuizComponent,
        EditQuestionComponent,
        EditChoiceComponent,
        AdminCoursesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
        ImageUploadModule.forRoot(),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedErrorInterceptor, multi: true },
        AuthService,
        CourseService,
        TopicService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
