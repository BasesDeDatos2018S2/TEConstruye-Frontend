import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../classes/payroll';
import { Employee } from '../../classes/employee';
import { Project } from '../../classes/project';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-view-payroll',
  templateUrl: './view-payroll.component.html',
  styleUrls: ['./view-payroll.component.css']
})
export class ViewPayrollComponent implements OnInit {
  header_list:string[];
  payroll_list:Payroll[];
  employee_list:Employee[];
  project_list:Project[];

  constructor(private employeesService: EmployeesService, private projectsService: ProjectsService) {
    this.header_list=["Proyecto", "Empleado","Fecha", "Horas"];

    this.employeesService.getEmployees().subscribe(data => {
      console.log("data:", data);
      this.employee_list = data;
    });

    this.projectsService.getProjects().subscribe(data => {
      console.log("data:", data);
      this.project_list = data;
    });

   }

  ngOnInit() {
  }

}
