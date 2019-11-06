import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';
import { Course } from '../course';

@Component({
  selector: 'app-show-registeredcourse',
  templateUrl: './show-registeredcourse.component.html',
  styleUrls: ['./show-registeredcourse.component.css']
})
export class ShowRegisteredcourseComponent implements OnInit {

  register: Course[] = []

  constructor(private router: Router, private autoservice: AutomationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.autoservice.getCourcesWithUserName(sessionStorage.getItem("studentUserName")).subscribe((data) => {
      console.log(data)
      this.register = data
    });
    // this.autoservice.getcourseList().subscribe((data)=>{
    //   console.log(data)
    //   this.register = data
    // });
  }

}
