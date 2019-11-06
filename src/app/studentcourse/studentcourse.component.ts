import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Observable } from 'rxjs';
import { Registration } from '../registration';
import { Course } from '../course';

@Component({
  selector: 'app-studentcourse',
  templateUrl: './studentcourse.component.html',
  styleUrls: ['./studentcourse.component.css']
})
export class StudentcourseComponent implements OnInit {

  course: Course[]=[];

  reg: Registration

  constructor(private router: Router, private autoservice: AutomationService) {
    this.reg = new Registration();
    // this.course=new Course();
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.autoservice.getcourseList().subscribe((data) => {
      console.log(data)
      this.course = data
    });
  }

  disButtn() {
    // if (this.course.registered == true)
      
  }


  studentregistration(cours: Course) {
    this.reg.userName = sessionStorage.getItem("studentUserName");
    this.reg.courseId = cours.id;
    this.autoservice.registerStudent(this.reg).subscribe();
    this.reloadData();
    // this.disButtn();
    console.log(cours.registered);
    if(cours.registered==true){
      console.log(cours.registered);
      // (<HTMLButtonElement>document.getElementById("bttn")).hidden = true;
    }
    alert("student registered successfully")
  }
  studentLog() {
    this.autoservice.studentLogout();
    this.router.navigate(['/homepage'])
  }
  showCourses(){
    
   this.router.navigate(['/showregisteredcourse'])

  }
}
