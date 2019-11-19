import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Course } from '../course';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  course : Course[]=[]
  cours: MatTableDataSource<Course>;

  constructor(private router :Router, private autoservice: AutomationService) { }

  displayedColumns: string[] = ['id', 'courseName', 'facultyName', 'startDate', 'endDate', 'capacity','action'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.autoservice.getcourseList().subscribe((data)=>{
      this.course = data;
      this.cours = new MatTableDataSource(this.course);
      this.cours.paginator = this.paginator;
      this.cours.sort = this.sort;
      console.log(this.course);
      //console.log(data)
      this.course = data
    });
  }

  addCourse(){
    this.router.navigate(['/addcourse'])

  }
  deleteCourse(id){
    if(confirm("Are you sure you want to delete")){
    console.log(this.autoservice.deleteCourse(id).subscribe());
    window.location.reload();
    }
    
  }
  courselogout(){
    this.autoservice.courseLogout();
    this.router.navigate(['/homepage'])
  }



}
