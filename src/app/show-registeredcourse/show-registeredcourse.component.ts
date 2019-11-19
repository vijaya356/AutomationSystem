import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from '../registration';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Course } from '../course';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-show-registeredcourse',
  templateUrl: './show-registeredcourse.component.html',
  styleUrls: ['./show-registeredcourse.component.css']
})
export class ShowRegisteredcourseComponent implements OnInit {

  register: Course[] = []
  reg: MatTableDataSource<Course>;

  constructor(private router: Router, private autoservice: AutomationService) { }
  
  displayedColumns: string[] = ['id', 'courseName', 'facultyName', 'startDate', 'endDate', 'capacity','registered'];
  
  name;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.name = sessionStorage.getItem("studentUserName")
    this.autoservice.getCourcesWithUserName(this.name).subscribe((data) => {
      this.register = data;
      this.reg = new MatTableDataSource(this.register);
      this.reg.paginator = this.paginator;
      this.reg.sort = this.sort;
      console.log(this.register);
      console.log(data)
      this.register = data
    });
    // this.autoservice.getcourseList().subscribe((data)=>{
    //   console.log(data)
    //   this.register = data
    // });
  }
  studentlogout(){
    this.autoservice.studentlogout();
    this.router.navigate(['/homepage'])
  }

}
