import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AutomationService } from '../services/automation.service';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { TimeTable } from '../timetable';

@Component({
  selector: 'app-stafftable',
  templateUrl: './stafftable.component.html',
  styleUrls: ['./stafftable.component.css']
})
export class StafftableComponent implements OnInit {

  timetable:TimeTable[]=[]
  staffs: MatTableDataSource<TimeTable>;

  constructor(private autoservice: AutomationService, private router : Router) { }

  displayedColumns: string[] = ['id', 'facultyName', 'courseName', 'startDate', 'endDate'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.autoservice.getstafftable().subscribe((data)=>{
      this.timetable = data;
      this.staffs = new MatTableDataSource(this.timetable);
      this.staffs.paginator = this.paginator;
      this.staffs.sort = this.sort;
      console.log(this.timetable);
      console.log(data)
      //this.timetable = data
    });
  }
  stafftablelogout(){
    this.autoservice.staffTableLogout();
    this.router.navigate(['/homepage'])
  }
  doFilter = (value: string) => {
    this.staffs.filter = value.trim().toLocaleLowerCase();
  }

}
