import { Component, OnInit } from '@angular/core';
import { Client } from '../../classes/client';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  add_client: boolean;
  edit_client: boolean;
  client_list: Client[] = [];
  client_to_add: Client;
  client_to_edit: Client;
  header_list: string[] = [];
  constructor() {
    this.add_client = false;
    this.edit_client = false;
    this.client_to_add = new Client(1, "","","","","","");
    this.client_to_edit = new Client(1, "","","","","","");
    this.header_list = [ "Cédula","Nombre","Primer Apellido","Segundo Apellido", "Correo", "Teléfono","",""];
    this.client_list.push(new Client(0,"604410064", "Nano","Ramírez","Miranda", "nano_12_rm@hotmail.com","83186440"));
    //this.client_list.push(new Client(1, "Jardin","Arquitecto Gustavo","San José","Juan"));
    //this.client_list.push(new Client(2, "Edificio","Ingeniero Andrés","Heredia","Ramón"));
    //this.client_list.push(new Client(3, "Foro","Arquitecto Crisptofer","México","Mariluz"));
    console.log(this.client_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.client_to_add.id = this.client_list.length;
    this.client_list.push(this.client_to_add);
    this.add_client = false;
  }

  onSubmitEdit() {
    for (let client of this.client_list) {
      if (client.id === this.client_to_edit.id) {
        client = this.client_to_edit;
      }
    }
    this.edit_client = false;

  }

  show_add_client() {
    this.add_client = true;
  }
  show_edit_client(id) {
    console.log("edit:", id);
    this.edit_client = true;
    for (let client of this.client_list) {
      if (client.id === id) {
        this.client_to_edit = client;
        break;
      }
    }
  }
  delete_client(id) {
    console.log("delete", id);

    for (let i = 0; i < this.client_list.length; i++) {
      if (this.client_list[i].id == id) {
        console.log(this.client_list[i]);
        this.client_list.splice(i, 1);
        break;
      }
    }
  }
}
