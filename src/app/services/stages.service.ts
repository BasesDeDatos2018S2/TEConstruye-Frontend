import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Stage } from '../classes/stage';

@Injectable({
  providedIn: 'root'
})
export class StagesService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = "http://172.18.95.165:8088/api/stage/";
    console.log("StageService works");
  }
  getStages(){
    return this.httpClient.get<Stage[]>(this.baseurl);
  }
  getStage(id:string){
    return this.httpClient.get<Stage[]>(this.baseurl+id);
  }
  updateStage(stage:Stage){
    return this.httpClient.put(this.baseurl+"update/", stage);
  }

  createStage(stage:Stage){
    return this.httpClient.post(this.baseurl+"add/", stage);
  }

  deleteStage(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }




}
