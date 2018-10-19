import { Component, OnInit } from '@angular/core';
import { Client } from '../../classes/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  model = new Client(1, '11112215-555', 'Gustavo', 'Segura', 'Umana', 'test@test.com', "8888-5555");
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
}
