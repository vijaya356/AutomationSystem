import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AutomationService } from '../services/automation.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { StaffList } from '../stafflist';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.component.html',
  styleUrls: ['./staffdetails.component.css']
})
export class StaffdetailsComponent implements OnInit {

  staffList:StaffList[]=[]
  staf: MatTableDataSource<StaffList>;

  constructor(private autoservice: AutomationService, private router : Router) { }

  displayedColumns: string[] = ['id', 'staffname', 'subject', 'phonenumber', 'email', 'userName','password','action'];
  dataSource


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.autoservice.getStaffList().subscribe((data)=>{
      this.staffList = data;
      this.staf = new MatTableDataSource(this.staffList);
      this.staf.paginator = this.paginator;
      this.staf.sort = this.sort;
      console.log(this.staffList);
      console.log(data)
      this.staffList = data
    });
  }
  
  addStaff(){
    this.router.navigate(["/addstaff"])
  }
  deleteStaff(id){
    if (confirm("Are you sure to delete ")) {
   console.log(this.autoservice.deleteStaff(id).subscribe());
   window.location.reload();

   //this.autoservice.deleteStaff(id).subscribe();
  
  }
}
  stafflogout(){
    this.autoservice.staffLogout();
    this.router.navigate(['/homepage'])
  }
  doFilter = (value: string) => {
    this.staf.filter = value.trim().toLocaleLowerCase();
  }


  

}
