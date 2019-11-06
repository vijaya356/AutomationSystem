import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentList } from '../Studentlist';
import { StaffList } from '../stafflist';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class AutomationService {
  getCourcesWithUserName(userName: string) :Observable<any>{
    return this.http.get(`${this.baseUrl}/getCourcesWithUserName/${userName}`);
  }
  studentlogout() {
    sessionStorage.removeItem("adminName")
  }
  

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  validateAdminLogin(userName: string,password:string): Observable<any> {
    console.log(userName+"   "+password)
    return this.http.get(`${this.baseUrl}/validateAdminLogin/${userName}/${password}`);
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllStudents`);
  }

  addToList(studentlist:StudentList) {
    console.log(studentlist)
    return this.http.post(`${this.baseUrl}`+`/addstudent/`,studentlist);
  }
  getStaffList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllstaff`);

  }

  addToTable(stafflist:StaffList){
    console.log(stafflist)
    return this.http.post(`${this.baseUrl}`+`/addStaff/`,stafflist);

  }
  validateStudentLogin(userName: string,password:string):Observable<any>{
    console.log(userName+" "+password)
    return this.http.get(`${this.baseUrl}/validateStudentLogin/${userName}/${password}`)


  }
  getcourseList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllCourselist`);

  }
  validateStaffLogin(userName: string,password :string):Observable<any>{
    console.log(userName+" "+password)
    return this.http.get(`${this.baseUrl}/validateStaffLogin/${userName}/${password}`)
  }
  addCourseList(courselist:Course){
   console.log(courselist)
   return this.http.post(`${this.baseUrl}`+`/addCourses/`,courselist);
  }

  registerStudent(cours: any) {
    console.log("lsdiuoidj             liyio")
    console.log(cours)
    return this.http.post(`${this.baseUrl}`+`/registerStudentCourse/`,cours);
    
  }
  deleteStudent(id:any){
    return this.http.delete(`${this.baseUrl}/deletebyid/${id}`);

  }
  deleteStaff(id:any){
    return this.http.delete(`${this.baseUrl}/deletestaff/${id}`);
  }
  deleteCourse(id:any){
    return this.http.delete(`${this.baseUrl}/deletecourse/${id}`);
  }
  updateStudent(studentToEdited:StudentList){
    return this.http.put(`${this.baseUrl}/updateBook/`,studentToEdited);
  }
  getstafftable():Observable<any>{
    return this.http.get(`${this.baseUrl}/getstafftable`);

  }
  staffLogout(){
    sessionStorage.removeItem("adminName")

  }
  staffTableLogout(){
    sessionStorage.removeItem("staffName")
  }
  courseLogout(){
    sessionStorage.removeItem("adminName")
  }
  studentLogout(){
    sessionStorage.removeItem("studentUserName")
  }

  getRegisteredCourse(){
    return this.http.get(`${this.baseUrl}/showRegisteredCourse`);
  }


}
