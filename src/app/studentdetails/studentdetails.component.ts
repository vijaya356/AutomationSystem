import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AutomationService } from '../services/automation.service';
import { Router } from '@angular/router';
import { StudentList } from '../Studentlist';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  studentList:StudentList[]=[]
  studentToBeEdit:StudentList;
  stu: MatTableDataSource<StudentList>;


  constructor(private autoservice: AutomationService, private router : Router) { 
    
  }
  displayedColumns: string[] = ['id', 'studFName', 'studLName', 'phonenum', 'userName', 'password','email', 'studdepart','Delete','action'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reloadData();

  }
  reloadData() {
    this.autoservice.getStudentList().subscribe((data)=>{
      this.studentList = data;
      this.stu = new MatTableDataSource(this.studentList);
      this.stu.paginator = this.paginator;
      this.stu.sort = this.sort;
      console.log(this.studentList);
      console.log(data)
      //this.studentList = data
    });
  }

  addStudent(){
    this.router.navigate(['/addstudent'])
  }
  deleteStudent(id){
   // console.log("hiiii")
    if(confirm("Are you sure tou want delete")){
    console.log(this.autoservice.deleteStudent(id).subscribe());
    window.location.reload();
    }
  }
  studentLogout(){
    this.autoservice.studentlogout();
    this.router.navigate(['/homepage'])
    console.log("log")


  }
  editStudent(studentList:StudentList){
    // this.studentToBeEdit=studentList;
  //  this.autoservice.editstudent(studentList).subscribe();
    console.log(this.studentList)
    this.autoservice.setStudList(studentList)
    this.router.navigate(['/editpage'])
    console.log(studentList);
    
  }
  doFilter = (value: string) => {
    this.stu.filter = value.trim().toLocaleLowerCase();
  }

  
}

