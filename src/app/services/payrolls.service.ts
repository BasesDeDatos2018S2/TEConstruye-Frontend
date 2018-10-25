import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Payroll } from '../classes/payroll';

@Injectable({
  providedIn: 'root'
})
export class PayrollsService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = "http://172.18.95.165:8088/api/payroll/";
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
