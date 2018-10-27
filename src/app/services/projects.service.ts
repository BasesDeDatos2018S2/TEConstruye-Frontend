import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from '../classes/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"project/";
    console.log("ProjectsService works");
  }
  getProjects(){
    return this.httpClient.get<Project[]>(this.baseurl);
  }
  getProject(id:number){
    return this.httpClient.get<Project[]>(this.baseurl+id);
  }
  updateProject(project:Project){
    return this.httpClient.put(this.baseurl+"update/", project);
  }

  createProject(project:Project){
    return this.httpClient.post(this.baseurl+"add/", project);
  }

  deleteProject(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }




}
