import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from './services/authuser.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class StaffguardGuard implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
 

  constructor(private router:Router,private authService:AuthuserService) {
  }

  canActivate(state: RouterStateSnapshot[],  route: ActivatedRouteSnapshot) {
    if (this.authService.isStaffIsValid()) {
      return true;
      // this.router.navigate(['/userlibrary'])
    }
      // alert("Bad access")
      this.router.navigate(['/homepage'])
      return false;
  //   }
  }

  
}
