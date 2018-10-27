import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  add_project: boolean;
  project:Project;
  project_to_add: Project;
  constructor() {
    this.add_project = false;
    this.project_to_add = new Project(1, "","","","","","",0,0,[],[]);
    this.project = new Project(0, "La Mau Casa","Cartago","Nano", "Ing. Gustavo","26/10/2018","27/10/2018",0,0,[],[])
  }

  ngOnInit() {
  }

  onSubmitAdd() {
    this.project_to_add.id = this.project.id;
    this.project = this.project_to_add;
    this.add_project = false;
  }

}
