import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../classes/payroll';
import { Employee } from '../../classes/employee';
import { Project } from '../../classes/project';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';
import { PayrollsService } from '../../services/payrolls.service';

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
  payroll_to_add: Payroll;
  test1:string;


  constructor(private employeesService: EmployeesService, private projectsService: ProjectsService, private payrollsService: PayrollsService) {
    this.test1="";
    this.header_list=["Proyecto", "Empleado","Fecha", "Horas","Opciones"];
    this.payroll_to_add=new Payroll(0, 0,0,0, new Date);
    this.employeesService.getEmployees().subscribe(data => {
      console.log("data:", data);
      this.employee_list = data;
    });

    this.projectsService.getProjects().subscribe(data => {
      console.log("data:", data);
      this.project_list = data;
    });

    this.payrollsService.getPayrolls().subscribe(data => {
      console.log("data:", data);
      this.payroll_list = data;
    });

   }

  ngOnInit() {
  }

  onSubmitAdd(){
    this.payroll_to_add.id = this.payroll_list.length;
    console.log(this.payroll_to_add);
    this.payroll_list.push(this.payroll_to_add);
    this.payroll_to_add=new Payroll(0, 0,0,0, new Date);
    // console.log(this.test1);
  }
  getEmployeeName(id:number){
    for(let employee of this.employee_list){
      if(id == employee.id){
        return employee.fname;

      }
    }
  }
  getProjectName(id:number){
    for(let project of this.project_list){
      if(id == project.id){
        return project.name;

      }
    }
  }
  delete_payroll(id:number) {
    console.log("delete", id);

    for (let i = 0; i < this.payroll_list.length; i++) {
      if (this.payroll_list[i].id == id) {
        console.log(this.payroll_list[i]);
        this.payroll_list.splice(i, 1);
        break;
      }
    }
  }


}