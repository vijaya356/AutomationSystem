import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { StudentList } from '../Studentlist';
import { StudentPageComponent } from '../student-page/student-page.component';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  constructor(private router: Router, private autoservice: AutomationService) {
    this.studentToBeEdit = new StudentList();
  }
  stud: any
  studentList: StudentList
  studentToBeEdit: StudentList;
  ngOnInit() {
    this.stud = this.autoservice.getStudList();
    console.log(this.stud)
  }
  //choreo:ChoreographerModel;



  //  editChoreos(choreo){
  //   //  this.autoservice..subscribe();
  //     alert("updated successfully"


  editstudent() {
    console.log(this.stud)
    this.autoservice.editstudent(this.stud).subscribe();
    alert("update done")
    this.router.navigate(['/studentdetails'])

  }


}
