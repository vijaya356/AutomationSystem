import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {



  constructor(private  router : Router) { }

  studdetails(){
    this.router.navigate(['/studentdetails'])
  }
  staffdetails(){
    this.router.navigate(['/staffdetails'])
  }
  courselist(){
    this.router.navigate(['/coursedetails'])
  }

  ngOnInit() {
  }

}
