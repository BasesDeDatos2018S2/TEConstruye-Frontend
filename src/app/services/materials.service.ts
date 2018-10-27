import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Material } from '../classes/material';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"material/";
    console.log("EmployeeService works");
  }
  getMaterials(){
    return this.httpClient.get<Material[]>(this.baseurl);
  }
  getMaterial(id:string){
    return this.httpClient.get<Material>(this.baseurl+id);
  }
  updateMaterial(material:Material){
    return this.httpClient.put(this.baseurl+"update/", material);
  }

  createMaterial(material:Material){
    return this.httpClient.post(this.baseurl+"add/", material);
  }

  deleteMaterial(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }






}
