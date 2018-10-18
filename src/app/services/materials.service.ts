import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Material } from '../classes/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor(private httpClient:HttpClient) {
    console.log("MaterialsService works");
  }

  getMaterials(){
    return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  getMaterial(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  updateMaterial(material:Material){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  deleteMaterial(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
}
