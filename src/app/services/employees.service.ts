import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../classes/employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"employee/";
    console.log("EmployeeService works");
  }
  getEmployees(){
    return this.httpClient.get<Employee[]>(this.baseurl);
  }
  getEmployee(id:string){
    return this.httpClient.get<Employee>(this.baseurl+id);
  }
  updateEmployee(employee:Employee){
    return this.httpClient.put(this.baseurl+"update/", employee);
  }

  createEmployee(employee:Employee){
    return this.httpClient.post(this.baseurl+"add/", employee);
  }

  deleteEmployee(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }

}
