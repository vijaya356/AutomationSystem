import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Observable } from 'rxjs';
import { Registration } from '../registration';
import { Course } from '../course';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-studentcourse',
  templateUrl: './studentcourse.component.html',
  styleUrls: ['./studentcourse.component.css']
})
export class StudentcourseComponent implements OnInit {

  course: Course[]=[];

  reg: Registration
  cours: MatTableDataSource<Course>;

  constructor(private router: Router, private autoservice: AutomationService) {
    this.reg = new Registration();
    // this.course=new Course();

  }

  displayedColumns: string[] = ['id', 'courseName', 'facultyName', 'startDate', 'endDate', 'capacity','action'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.autoservice.getcourseList().subscribe((data) => {
      this.course = data;
      this.cours = new MatTableDataSource(this.course);
      this.cours.paginator = this.paginator;
      this.cours.sort = this.sort;

    });
  }

  disButtn() {
    // if (this.course.registered == true)
      
  }


  studentregistration(cours: Course) {
    console.log(cours)
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
  doFilter = (value: string) => {
    this.cours.filter = value.trim().toLocaleLowerCase();
  }
}
