import { Component, OnInit } from '@angular/core';
import { StaffList } from '../stafflist';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  stafflist:StaffList

  constructor(private router: Router, private service : AutomationService) {
    this.stafflist = new StaffList();
   }

  ngOnInit() {
  }

  addToDatabase(){
    // console.log(this.registration)
    this.service.addToTable(this.stafflist).subscribe();
    alert("staff added Successfully")
    this.router.navigate(['/staffdetails'])
  }

}
