import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Payroll } from '../classes/payroll';

@Injectable({
  providedIn: 'root'
})
export class PayrollsService {

  constructor(private httpClient:HttpClient) {
    console.log("PayrollService works");
  }

  getPayrolls(){
    return this.httpClient.get<Payroll[]>("../../assets/payrolls.json");
  }
  getPayroll(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  updatePayroll(payroll:Payroll){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  deletePayroll(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
}
