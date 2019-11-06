import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

    

    isStudentIsValid() : Boolean{
      const logStudent = sessionStorage.getItem('studentUserName');
      if(logStudent != null && localStorage.getItem("type")=="student")
      {
        return true;
      }
      else
      return false;
    }

    isAdminIsValid() : Boolean{
      const logAdmin = sessionStorage.getItem('adminName');
      if(logAdmin != null && localStorage.getItem("type")=="admin")
      {
        return true;
      }
      else
      return false;
    }

    isStaffIsValid() : Boolean{
      const logStaff = sessionStorage.getItem('staffName');
      if(logStaff != null && localStorage.getItem("type")=="staff")
      {
        return true;
      }
      else
      return false;
    }

    constructor() { }
}
