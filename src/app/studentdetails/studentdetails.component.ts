import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutomationService } from '../services/automation.service';
import { Router } from '@angular/router';
import { StudentList } from '../Studentlist';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  studentList:Observable<any>;


  constructor(private autoservice: AutomationService, private router : Router) { 
    
  }

  ngOnInit() {
    this.reloadData();

  }
  reloadData() {
    this.autoservice.getStudentList().subscribe((data)=>{
      console.log(data)
      this.studentList = data
    });
  }

  addStudent(){
    this.router.navigate(['/addstudent'])
  }
  deleteStudent(id){
    console.log("hiiii")
    this.autoservice.deleteStudent(id).subscribe();
    alert("student deleted successfully")
  }
  studentLogout(){
    this.autoservice.studentlogout();
    this.router.navigate(['/homepage'])
    console.log("log")


  }
  editStudent(){
    
  }

  
}

