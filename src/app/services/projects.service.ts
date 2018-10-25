import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from '../classes/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = "http://172.18.95.165:8088/api/project/";
    console.log("ProjectsService works");
  }
  getProjects(){
    return this.httpClient.get<Project[]>(this.baseurl);
  }
  getProject(id:string){
    return this.httpClient.get<Project[]>(this.baseurl+id);
  }
  updateProject(project:Project){
    return this.httpClient.put(this.baseurl+"update/", project);
  }

  createProject(project:Project){
    return this.httpClient.post(this.baseurl+"add/", project);
  }

  deleteProject(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }




}
