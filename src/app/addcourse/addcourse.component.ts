import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Course } from '../course';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courselist:Course

  // maxDate :Date;
 // minDate = new Date(2019, 11, 22);
  endMinDate:Date;
  endMaxDate
  min


  constructor(private router : Router, private service : AutomationService) {
    this.courselist= new Course();
    // this.maxDate = new Date()
   // this.minDate = new Date();
   
  
   }
   
   now: Date=new Date();
   minDate = new Date().getFullYear()
   maxDate = new Date(this.now.getFullYear(),this.now.getMonth() , this.now.getDate());
  
//   minDate :NgbDateStruct = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };
  // maxDate :NgbDateStruct={year: this.now.getFullYear(), month: this.now.getMonth()+1, day: this.now.getDate()+9};

  ngOnInit() {
    console.log(this.minDate);
  
  }

  do(dates){
    this.endMaxDate = dates;
    // console.log(this.courselist.startDate.getFullYear()+"-"+
    // this.courselist.startDate.getMonth()+"-"+this.courselist.startDate.getDate())
  }
  onSubmit(){
    // console.log(this.courselist.sDate.getFullYear()+"-"+
    // this.courselist.sDate.getMonth()+"-"+this.courselist.sDate.getDate())
    this.courselist.startDate=this.courselist.sDate.getFullYear()+"-"+
    this.courselist.sDate.getMonth()+"-"+this.courselist.sDate.getDate()

    this.courselist.endDate=this.courselist.eDate.getFullYear()+"-"+
    this.courselist.eDate.getMonth()+"-"+this.courselist.eDate.getDate()
    this.service.addCourseList(this.courselist).subscribe();


    alert("course added successfully");
    this.router.navigate(['/coursedetails'])
  }

  
}
