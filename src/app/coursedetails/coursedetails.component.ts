import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Course } from '../course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  course : Observable<any>

  constructor(private router :Router, private autoservice: AutomationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.autoservice.getcourseList().subscribe((data)=>{
      console.log(data)
      this.course = data
    });
  }

  addCourse(){
    this.router.navigate(['/addcourse'])

  }
  deleteCourse(id){
    this.autoservice.deleteCourse(id).subscribe();

  }
  courselogout(){
    this.autoservice.courseLogout();
    this.router.navigate(['/homepage'])
  }

}
