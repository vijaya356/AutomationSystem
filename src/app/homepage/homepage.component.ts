import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  adminPage(){
    console.log("login")
    this.router.navigate(['/adminPage'])
  }

  staffPage(){
    console.log("login")
    this.router.navigate(['/staffPage'])

  }
  studentPage(){
    this.router.navigate(['/studentPage'])
  }

  ngOnInit() {
  }



}
