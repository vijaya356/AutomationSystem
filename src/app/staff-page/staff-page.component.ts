import { Component, OnInit } from '@angular/core';
import{StaffLogin} from '../staffLogin';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

log:StaffLogin  

  constructor(private router : Router, private service :AutomationService ) { 
    this.log = new StaffLogin();
  }
  onSubmit(){
    localStorage.setItem("type","staff")
    console.log("staff Login")
    this.service.validateStaffLogin(this.log.userName,this.log.password).subscribe((data)=>{
      if(data){
        sessionStorage.setItem("staffName",this.log.userName);
        this.router.navigate(['/stafftable'])
        alert("login successfully")
      }
      else
      alert("invalid credentials")
    })

  }

  
  

  ngOnInit() {
  }

}
