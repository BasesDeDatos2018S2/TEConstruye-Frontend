import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from '../classes/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) {
    console.log("ProjectService works");
  }

  getProjects(){
    return this.httpClient.get<Project[]>("../../assets/projects.json");
  }
  getProject(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  updateProject(project:Project){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
  deleteProject(id:number){
    // return this.httpClient.get<Material[]>("../../assets/materials.json");
  }
}
