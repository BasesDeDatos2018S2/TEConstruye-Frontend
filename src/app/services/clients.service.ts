import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../classes/client';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
    baseurl:string;
    constructor(private httpClient:HttpClient) {
      this.baseurl = environment.apiUrl+"client/";
      console.log("ClientService works");
    }
    getClients(){
      return this.httpClient.get<Client[]>(this.baseurl);
    }
    getClient(id:string){
      return this.httpClient.get<Client[]>(this.baseurl+id);
    }
    updateClient(client:Client){
      return this.httpClient.put(this.baseurl+"update/", client);
    }

    createClient(client:Client){
      return this.httpClient.post(this.baseurl+"add/", client);
    }

    deleteClient(id:string){
      return this.httpClient.delete(this.baseurl+"delete/"+id);
    }
}
