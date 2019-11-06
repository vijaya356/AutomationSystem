import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { StafftableComponent } from './stafftable/stafftable.component';
import { AuthGuard } from './auth.guard';
import { AdminguardGuard } from './adminguard.guard';
import { StaffguardGuard } from './staffguard.guard';
import { ShowRegisteredcourseComponent } from './show-registeredcourse/show-registeredcourse.component';

const routes: Routes = [
  {path : '',redirectTo: '/homepage', pathMatch:'full'},
    {path : 'homepage', component: HomepageComponent},
    {path : 'adminPage',component: AdminPageComponent},
    {path : 'staffPage',component: StaffPageComponent},
    {path : 'studentPage',component: StudentPageComponent},
    {path : 'admindetails',component: AdmindetailsComponent,canActivate:[AdminguardGuard]},
    {path : 'studentdetails',component: StudentdetailsComponent,canActivate:[AdminguardGuard]},
    {path : 'staffdetails', component: StaffdetailsComponent,canActivate:[AdminguardGuard]},
    {path : 'addstudent', component :AddstudentComponent},
    {path : 'addstaff', component :AddstaffComponent},
    {path : 'coursedetails',component :CoursedetailsComponent,canActivate:[AdminguardGuard]},
    {path : 'addcourse',component : AddcourseComponent},
    {path : 'studentcourse',component :StudentcourseComponent, canActivate:[AuthGuard]},
    {path : 'stafftable',component :StafftableComponent, canActivate:[StaffguardGuard]},
    {path : 'showregisteredcourse', component :ShowRegisteredcourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
