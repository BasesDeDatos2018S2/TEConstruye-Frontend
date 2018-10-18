import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  add_project: boolean;
  edit_project: boolean;
  project_list: Project[] = [];
  project_to_add: Project;
  project_to_edit: Project;
  header_list: string[] = [];
  constructor() {
    this.add_project = false;
    this.edit_project = false;
    this.project_to_add = new Project(1, "","","");
    this.project_to_edit = new Project(1, "","","");
    this.header_list = [ "Nombre","Ubicación", "Cliente", "",""];
    this.project_list.push(new Project(0, "Casa","Cartago", "Gustavo"));
    this.project_list.push(new Project(1, "Jardin","San José","Juan"));
    this.project_list.push(new Project(2, "Edificio","Heredia","Ramón"));
    this.project_list.push(new Project(3, "Foro","México","Mariluz"));
    console.log(this.project_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.project_to_add.id = this.project_list.length;
    this.project_list.push(this.project_to_add);
    this.add_project = false;
  }

  onSubmitEdit() {
    for (let project of this.project_list) {
      if (project.id === this.project_to_edit.id) {
        project = this.project_to_edit;
      }
    }
    this.edit_project = false;

  }

  show_add_project() {
    this.add_project = true;
  }
  show_edit_project(id) {
    console.log("edit:", id);
    this.edit_project = true;
    for (let project of this.project_list) {
      if (project.id === id) {
        this.project_to_edit = project;
        break;
      }
    }
  }
  delete_project(id) {
    console.log("delete", id);

    for (let i = 0; i < this.project_list.length; i++) {
      if (this.project_list[i].id == id) {
        console.log(this.project_list[i]);
        this.project_list.splice(i, 1);
        break;
      }
    }
  }
}
