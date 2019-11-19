import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { StudentList } from '../Studentlist';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  studentlist:StudentList

  constructor(private router: Router, private service : AutomationService) {
    this.login = new Login();
    this.studentlist=new StudentList();
   }

  login : Login
  ngOnInit() {
  }

  addToDatabase(){
    this.service.addToList(this.studentlist).subscribe();
    alert("student added Successfully")
    this.router.navigate(['/studentdetails'])
  }

  
  

  

}
