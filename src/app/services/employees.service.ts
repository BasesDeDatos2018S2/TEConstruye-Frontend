import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient:HttpClient) {
    console.log("EmployeeService works");
  }
  getEmployees(){
    return this.httpClient.get<Employee[]>("../../assets/employees.json");
  }
  getEmployee(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  updateEmployee(employee:Employee){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  deleteEmployee(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
}
