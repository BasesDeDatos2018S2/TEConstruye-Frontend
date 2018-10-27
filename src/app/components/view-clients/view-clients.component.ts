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
    this.client_to_add = new Client("","","","","","",[]);
    this.client_to_edit = new Client( "","","","","","",[]);

    this.header_list = [ "Cédula","Nombre","Primer Apellido","Segundo Apellido", "Correo", "Teléfono","",""];

    this.updateClientList();
    console.log(this.client_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    // this.client_list.push(this.client_to_add);

    this.clientService.createClient(this.client_to_add).subscribe(
          data => {
              console.log("POST Request is successful ", data);
              this.updateClientList();
          },
          error => {
              console.log("Error", error);
          }
      );
      this.add_client = false;

  }

  onSubmitEdit() {
    this.clientService.updateClient(this.client_to_edit).subscribe(
          data => {
              console.log("PUT Request is successful ", data);
              this.updateClientList();
          },
          error => {
              console.log("Error", error);
          }
      );
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
              console.log("DELETE Request is successful ", data);
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
    console.log("updateClientList");
    this.clientService.getClients().subscribe(data => {
      console.log("data:", data);
      this.client_list = data;
    });
  }
}
