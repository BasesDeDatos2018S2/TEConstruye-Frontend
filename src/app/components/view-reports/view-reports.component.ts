import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';
import { ReportsSettings } from '../../classes/reports-settings';
import { ProjectsService } from '../../services/projects.service';
import { ReportsService } from '../../services/reports.service';
@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  project_list: Project[]
  id:number;
  settings:ReportsSettings;
  constructor(private projectsService: ProjectsService, private reportsService: ReportsService) {
    this.settings=new ReportsSettings("gsegura96@gmail.com", "01/03/2014" ,"01/10/2014")
    this.updateData();
  }

  ngOnInit() {
  }

  updateData(){
    this.projectsService.getProjects().subscribe(data => {
      console.log("data:", data);
      this.project_list = data;
    });


  }


  onCreateBudgetReport(){
    this.reportsService.createBudget(this.id, this.settings ).subscribe(
          data => {
              console.log("Reporte ESTADO Request is successful ", data);
              // this.payroll_to_add=new Payroll(0, 0,0,0, new Date);
              // this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );
  }

  onCreatePlanillaReport(){
    this.reportsService.createProjectPayment( this.settings ).subscribe(
          data => {
              console.log("Reporte ESTADO Request is successful ", data);
              // this.payroll_to_add=new Payroll(0, 0,0,0, new Date);
              // this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );
  }

  onCreateGastosReport(){
    this.reportsService.createProjectExpenses(this.id, this.settings ).subscribe(
          data => {
              console.log("Reporte ESTADO Request is successful ", data);
              // this.payroll_to_add=new Payroll(0, 0,0,0, new Date);
              // this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );
  }

  onCreateStatusReport(){
    this.reportsService.createProjectStatus(this.id, this.settings ).subscribe(
          data => {
              console.log("Reporte ESTADO Request is successful ", data);
              // this.payroll_to_add=new Payroll(0, 0,0,0, new Date);
              // this.updateData();
          },
          error => {
              console.log("Error", error);
          }
      );
  }
}
