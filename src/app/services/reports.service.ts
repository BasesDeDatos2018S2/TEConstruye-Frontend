import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ReportsSettings } from '../classes/reports-settings';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"detail/report/";
    console.log("ReportsService works");
  }


  createProjectExpenses(id:number,  reportsSettings:ReportsSettings){
    return this.httpClient.post(this.baseurl+"expenses/"+id, reportsSettings);
  }
  createProjectPayment(  reportsSettings:ReportsSettings){
    return this.httpClient.post(this.baseurl+"employeepayment/", reportsSettings);
  }
  createProjectStatus(id:number, reportsSettings:ReportsSettings){
    return this.httpClient.post(this.baseurl+"status/"+id, reportsSettings);
  }

  createBudget(id:number, reportsSettings:ReportsSettings){
    return this.httpClient.post(this.baseurl+"budget/"+id, reportsSettings);
  }



}
