import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Invoice } from '../classes/invoice';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"invoice/";
    console.log("InvicesService works");
  }

  getInvoices(){
    return this.httpClient.get<Invoice[]>(this.baseurl);
  }

  getInvoice(id:string){
    return this.httpClient.get<Invoice[]>(this.baseurl+id);
  }

  updateInvoice(invoice:Invoice){
    return this.httpClient.put(this.baseurl+"update/", invoice);
  }

  createInvoice(invoice:Invoice){
    return this.httpClient.post(this.baseurl+"add/", invoice);
  }

  deleteInvoice(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
