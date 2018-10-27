import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';
import { Employee } from '../../classes/employee';
import { Client } from '../../classes/client';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  employee_list:Employee[];
  client_list:Client[];

  constructor(private employeesService: EmployeesService, private projectsService: ProjectsService, private clientsService: ClientsService, private route: ActivatedRoute, private router: Router) {

    this.employee_list=[]
    this.project_list=[]
    this.client_list=[]
    this.add_project = false;
    this.edit_project = false;
    this.project_to_add = new Project(1, "","","","",);
    this.project_to_edit = new Project(1, "","","","",);
    this.header_list = [ "Nombre","Encargado","Ubicación", "Cliente", "Presupuesto","Costo actual","Opciones"];
    this.updateData();
    // this.project_list.push(new Project(0, "Casa","Ingeniero Mauricio","Cartago", "Gustavo","",""));
    // this.project_list.push(new Project(1, "Jardin","Arquitecto Gustavo","San José","Juan","",""));
    // this.project_list.push(new Project(2, "Edificio","Ingeniero Andrés","Heredia","Ramón","",""));
    // this.project_list.push(new Project(3, "Foro","Arquitecto Crisptofer","México","Mariluz","",""));
    console.log(this.project_list);
  }

  ngOnInit() {

  }
  onSubmitAdd() {
    console.log("Project",this.project_to_add);
    // this.payroll_list.push(this.payroll_to_add);
    this.projectsService.createProject(this.project_to_add).subscribe(
          data => {
              console.log("POST Request is successful ", data);
              this.project_to_add=new Project(1, "","","","");
              this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );

    this.add_project = false;
  }

  onSubmitEdit() {
    // for (let project of this.project_list) {
    //   if (project.id === this.project_to_edit.id) {
    //     project = this.project_to_edit;
    //   }
    // }
    this.projectsService.updateProject(this.project_to_edit).subscribe(
          data => {
              console.log("PUT Request is successful ", data);
              this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );
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
        this.project_to_edit =  Object.assign({}, project);;
        break;
      }
    }
  }



  deleteProject(id:number) {
    console.log("delete", id);
    this.projectsService.deleteProject(id).subscribe(
          data => {
              console.log("DELETE project is successful ", data);
              this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );
  }


  updateData(){
    console.log("updateClientList");
    this.employeesService.getEmployees().subscribe(data => {
      console.log("data:", data);
      this.employee_list = data;
    });

    this.projectsService.getProjects().subscribe(data => {
      console.log("data:", data);
      this.project_list = data;
    });

    this.clientsService.getClients().subscribe(data => {
      console.log("data:", data);
      this.client_list = data;
    });
  }


  getEmployeeName(id:number){
    for(let employee of this.employee_list){
      if(id == employee.id){
        return employee.name + " "+employee.lastname1;
      }
    }
  }


  getClientName(id:string){
    for(let client of this.client_list){
      if(id == client.identification){
        return client.name + " "+client.lastname1;
      }
    }
  }


  goToProject(id:number) {
    this.router.navigate(['/project', { id: id} ]);
  }
}
