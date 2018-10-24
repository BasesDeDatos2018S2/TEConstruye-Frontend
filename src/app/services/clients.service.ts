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

      // return this.httpClient.get<Client[]>("../../assets/clients.json");
      return this.httpClient.get<Client[]>("http://172.18.95.165:8088/api/client");
    }
    getClient(id:string){
      return this.httpClient.get<Client[]>("http://172.18.95.165:8088/api/client/"+id);
      // return this.httpClient.get<Material[]>("../../assets/materials.json");
    }
    updateClient(client:Client){
      // return this.httpClient.get<Material[]>("../../assets/materials.json");
      let url:string = "http://172.18.95.165:8088/api/client/update/";
      console.log(url);
      // return this.httpClient.delete("http://172.18.95.165:8088/api/client/delete/"+id);
      return this.httpClient.put(url, client);
    }

    createClient(client:Client){
      let url:string = "http://172.18.95.165:8088/api/client/add/";
      console.log(url);
      // return this.httpClient.delete("http://172.18.95.165:8088/api/client/delete/"+id);
      return this.httpClient.post(url, client);
    }

    deleteClient(id:string){
      let url:string = "http://172.18.95.165:8088/api/client/delete/"+id;
      console.log(url);
      // return this.httpClient.delete("http://172.18.95.165:8088/api/client/delete/"+id);
      return this.httpClient.delete(url);
      // this.httpClient.delete(url).subscribe(
      //       data => {
      //           console.log("PATCH Request is successful ", data);
      //       },
      //       error => {
      //           console.log("Error", error);
      //       }
      //   );

    }
}
