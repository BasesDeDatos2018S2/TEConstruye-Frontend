import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

    constructor(private httpClient:HttpClient) {
      console.log("ClientService works");
    }
    getClients(){
      return this.httpClient.get<Client[]>("../../assets/clients.json");
    }
    getClient(id:number){
      // return this.httpClient.get<Material[]>("../../assets/materials.json");
    }
    updateClient(invoice:Client){
      // return this.httpClient.get<Material[]>("../../assets/materials.json");
    }
    deleteClient(id:number){
      // return this.httpClient.get<Material[]>("../../assets/materials.json");
    }
}
