import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { StafftableComponent } from './stafftable/stafftable.component';
import { ShowRegisteredcourseComponent } from './show-registeredcourse/show-registeredcourse.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StaffPageComponent,
    StudentPageComponent,
    AdminPageComponent,
    AdmindetailsComponent,
    StudentdetailsComponent,
    StaffdetailsComponent,
    AddstudentComponent,
    AddstaffComponent,
    CoursedetailsComponent,
    AddcourseComponent,
    StudentcourseComponent,
    StafftableComponent,
    ShowRegisteredcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
