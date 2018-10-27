import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Payroll } from '../classes/payroll';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayrollsService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"worked_hours/";
    console.log("PayrollsService works");
  }
  getPayrolls(){
    return this.httpClient.get<Payroll[]>(this.baseurl);
  }
  getPayroll(id:string){
    return this.httpClient.get<Payroll[]>(this.baseurl+id);
  }
  updatePayroll(payroll:Payroll){
    return this.httpClient.put(this.baseurl+"update/", payroll);
  }

  createPayroll(payroll:Payroll){
    return this.httpClient.post(this.baseurl+"add/", payroll);
  }

  deletePayroll(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }}
