import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  add_project: boolean;
  project:Project;
  project_to_add: Project;

  constructor(private employeesService: EmployeesService, private projectsService: ProjectsService) {
    this.add_project = false;
    this.project_to_add = new Project(1, "","","","");
    this.project = new Project(0, "La Mau Casa","Cartago","Nano", "Ing. Gustavo")
  }

  ngOnInit() {
  }

  onSubmitAdd() {
    this.project_to_add.id = this.project.id;
    this.project = this.project_to_add;
    this.add_project = false;
  }

}
