import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutomationService } from '../services/automation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.component.html',
  styleUrls: ['./staffdetails.component.css']
})
export class StaffdetailsComponent implements OnInit {

  staffList:Observable<any>;

  constructor(private autoservice: AutomationService, private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.autoservice.getStaffList().subscribe((data)=>{
      console.log(data)
      this.staffList = data
    });
  }
  
  addStaff(){
    this.router.navigate(["/addstaff"])
  }
  deleteStaff(id){
   console.log("shshds")
   this.autoservice.deleteStaff(id).subscribe();
  }
  stafflogout(){
    this.autoservice.staffLogout();
    this.router.navigate(['/homepage'])
  }

  

}
