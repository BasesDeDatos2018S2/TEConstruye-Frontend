import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  add_employee: boolean;
  edit_employee: boolean;
  employee_list: Employee[] = [];
  employee_to_add: Employee;
  employee_to_edit: Employee;
  header_list: string[] = [];
  constructor() {
    this.add_employee = false;
    this.edit_employee = false;
    this.employee_to_add = new Employee(1, "", "", "","",0);
    this.employee_to_edit = new Employee(1, "", "", "","",0);
    this.header_list = ["Cedula", "Nombre", "Primer Apellido", "Segundo Apellido","Teléfono","",""];
    this.employee_list.push(new Employee(0,"609630745", "Pedro", 'Miranda', 'Picado', 87365433));
    this.employee_list.push(new Employee(1, "107435454", "Juan", 'Rivas','Chinchilla', 86476595));
    this.employee_list.push(new Employee(2, "1179300456", "Ramón", 'Rivera',"Hidalgo", 86259354));
    this.employee_list.push(new Employee(3, "2057307551", "Mariluz", 'Segura',"Consumi", 89053007));
    console.log(this.employee_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.employee_to_add.id = this.employee_list.length;
    this.employee_list.push(this.employee_to_add);
    this.add_employee = false;
  }

  onSubmitEdit() {
    for (let employee of this.employee_list) {
      if (employee.id === this.employee_to_edit.id) {
        employee = this.employee_to_edit;
      }
    }
    this.edit_employee = false;

  }

  show_add_employee() {
    this.add_employee = true;
  }
  show_edit_employee(id) {
    console.log("edit:", id);
    this.edit_employee = true;
    for (let employee of this.employee_list) {
      if (employee.id === id) {
        this.employee_to_edit = employee;
        break;
      }
    }
  }
  delete_employee(id) {
    console.log("delete", id);

    for (let i = 0; i < this.employee_list.length; i++) {
      if (this.employee_list[i].id == id) {
        console.log(this.employee_list[i]);
        this.employee_list.splice(i, 1);
        break;
      }
    }
  }
}
