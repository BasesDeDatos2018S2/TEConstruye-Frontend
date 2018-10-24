import { Component, OnInit } from '@angular/core';
import { Client } from '../../classes/client';
import { ClientsService } from '../../services/clients.service';

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
  constructor(private clientService: ClientsService) {

    this.add_client = false;
    this.edit_client = false;
    this.client_to_add = new Client("","","","","","");
    this.client_to_edit = new Client( "","","","","","");

    this.header_list = [ "Cédula","Nombre","Primer Apellido","Segundo Apellido", "Correo", "Teléfono","",""];

    this.updateClientList();
    // this.client_list.push(new Client(0,"604410064", "Nano","Ramírez","Miranda", "nano_12_rm@hotmail.com","83186440"));
    //this.client_list.push(new Client(1, "Jardin","Arquitecto Gustavo","San José","Juan"));
    //this.client_list.push(new Client(2, "Edificio","Ingeniero Andrés","Heredia","Ramón"));
    //this.client_list.push(new Client(3, "Foro","Arquitecto Crisptofer","México","Mariluz"));
    console.log(this.client_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.client_list.push(this.client_to_add);
    this.add_client = false;
  }

  onSubmitEdit() {
    for (let client of this.client_list) {
      if (client.identification === this.client_to_edit.identification) {
        client = this.client_to_edit;
      }
    }
    this.edit_client = false;

  }

  show_add_client() {
    this.add_client = true;
  }
  show_edit_client(identification) {
    console.log("edit:", identification);
    this.edit_client = true;
    for (let client of this.client_list) {
      if (client.identification === identification) {
        this.client_to_edit = client;
        break;
      }
    }
  }
  delete_client(identification:string) {
    console.log("delete", identification);
    this.clientService.deleteClient(identification).subscribe(
          data => {
              console.log("PATCH Request is successful ", data);
              this.updateClientList();
          },
          error => {
              console.log("Error", error);
          }
      );



    // for (let i = 0; i < this.client_list.length; i++) {
    //   if (this.client_list[i].identification == identification) {
    //     console.log(this.client_list[i]);
    //     this.client_list.splice(i, 1);
    //     break;
    //   }
    // }
  }

  updateClientList(){
    this.clientService.getClients().subscribe(data => {
      console.log("data:", data);
      this.client_list = data;
    });
  }
}
