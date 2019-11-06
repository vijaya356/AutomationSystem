import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutomationService } from '../services/automation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stafftable',
  templateUrl: './stafftable.component.html',
  styleUrls: ['./stafftable.component.css']
})
export class StafftableComponent implements OnInit {

  timetable:Observable<any>

  constructor(private autoservice: AutomationService, private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.autoservice.getstafftable().subscribe((data)=>{
      console.log(data)
      this.timetable = data
    });
  }
  stafftablelogout(){
    this.autoservice.staffTableLogout();
    this.router.navigate(['/homepage'])
  }
  

}
