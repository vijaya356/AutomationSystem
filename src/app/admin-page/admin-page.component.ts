import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../adminLogin';
import { Router } from '@angular/router';
import { AutomationService } from '../services/automation.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

   login: AdminLogin
  constructor(private router:Router,private service:AutomationService) {
    this.login = new AdminLogin();
   }
   onSubmit(){
     console.log("wqwertyuii")
     localStorage.setItem("type","admin")
    this.service.validateAdminLogin(this.login.userName,this.login.password).subscribe((data)=>{
      if(data){
        sessionStorage.setItem("adminName",this.login.userName);
        this.router.navigate(['/admindetails'])
      }
      else
      alert("invalid credentials")
    })
    //  
   }

  ngOnInit() {
  }

}
