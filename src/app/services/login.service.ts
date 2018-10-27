import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = "http://192.168.100.13:8091/api/login/";
    console.log("EmployeeService works");
  }
  // getEmployees(){
  //   return this.httpClient.get<Employee[]>(this.baseurl);
  // }



  login(user:User){
    return this.httpClient.post(this.baseurl+"authenticate/", user);
  }



}
