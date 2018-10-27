import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';
import { Client } from '../../classes/client';
import { Employee } from '../../classes/employee';
import { EmployeesService } from '../../services/employees.service';
import { ClientsService } from '../../services/clients.service';
import { ProjectsService } from '../../services/projects.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  add_project: boolean;
  project:Project;
  project_to_add: Project;
  client:Client;
  employee:Employee;
  id:number;
  constructor(private employeesService: EmployeesService, private clientsService: ClientsService, private projectsService: ProjectsService, private route: ActivatedRoute, private router: Router) {
    this.add_project = false;
    this.project_to_add = new Project(1, "","","","","","",0,0,[],[]);
    this.project = new Project(1, "","","","","","",0,0,[],[]);
    this.client = new Client("","","","","","",[]);
    this.employee = new Employee(1, "", "","","",0,"",0,0);
    // this.project = new Project(0, "La Mau Casa","Cartago","Nano", "Ing. Gustavo")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("params",params)
      console.log("ID",JSON.parse(params["id"]))
      console.log("ID type",JSON.parse(params["id"]).type)
      this.id = JSON.parse(params["id"]);

      this.projectsService.getProject(JSON.parse(params["id"])).subscribe(data => {
        console.log("dataP:", data);
        this.project = data;
      });

            //Do Things
        });
        this.updateData();

  }

  // onSubmitAdd() {
  //   this.project_to_add.id = this.project.id;
  //   this.project = this.project_to_add;
  //   this.add_project = false;
  // }



  updateData(){

    this.projectsService.getProject(this.id).subscribe(data => {
      console.log("data:", data);
      this.project = data;

      this.employeesService.getEmployee(this.project.manager).subscribe(data => {
        console.log("employee:", data);
        this.employee = data;
      });

      this.clientsService.getClient(this.project.id_client).subscribe(data => {
        console.log("client:", data);
        this.client = data;
      });

    },
    error => {
        console.log("Error!", error);
    });




  }
}
