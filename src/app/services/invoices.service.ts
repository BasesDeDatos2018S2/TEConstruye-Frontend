import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Invoice } from '../classes/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private httpClient:HttpClient) {
    console.log("InvicesService works");
  }
  getInvoices(){
    return this.httpClient.get<Invoice[]>("../../assets/invoices.json");
  }
  getInvoice(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  updateInvoice(invoice:Invoice){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  deleteInvoice(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
}
