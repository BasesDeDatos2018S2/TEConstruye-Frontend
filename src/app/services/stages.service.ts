import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Stage } from '../classes/stage';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  constructor(private httpClient:HttpClient) {
    console.log("MaterialsService works");
  }

  getStages(){
    return this.httpClient.get<Stage[]>("../../assets/stages.json");
  }
  getStage(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  updateStage(material:Stage){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  deleteStage(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
}
