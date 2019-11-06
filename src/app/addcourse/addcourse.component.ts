import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Course } from '../course';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courselist:Course


  constructor(private router : Router, private service : AutomationService) {
    this.courselist= new Course();
   }

  ngOnInit() {
  }
  onSubmit(){
    this.service.addCourseList(this.courselist).subscribe();
    alert("course added successfully");
    this.router.navigate(['/coursedetails'])
  }

  

}
