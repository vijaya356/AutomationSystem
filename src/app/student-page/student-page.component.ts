import { Component, OnInit } from '@angular/core';
import {StudentLogin} from '../studentLogin';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  log:StudentLogin

  constructor(private router:Router, private service:AutomationService) { 
    this.log = new StudentLogin();
  }

  ngOnInit() {
  } 

  onSubmit(){
    console.log("student Login")
    localStorage.setItem("type","student")
    this.service.validateStudentLogin(this.log.userName,this.log.password).subscribe((data)=>{
      if(data){
        sessionStorage.setItem("studentUserName",this.log.userName);
        this.router.navigate(['/studentcourse'])
        alert("login successfully")
      }
      else
      alert("invalid credentials")
    })
    //  
  
  }

}
