import { Component, OnInit } from '@angular/core';
import { Stage } from '../../classes/stage';
import { Material } from '../../classes/material';
import { Invoice } from '../../classes/invoice';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  stages:Stage[];
  header_list:string[];

  constructor() {
    this.stages=[];
    this.header_list=["Nombre","Descripcion","Completado","Opciones"];

    let stages_titles =["Cimientos", "Piso","Paredes"];
    let id =0;
    for(let t of stages_titles){
      let stage =  new Stage(id++, 1, t, "Chrorrear cemento", false, new Date(), new Date(), [],[] );
      stage.materials.push({material:new Material(0, "varilla", 'Consequatur est quas', 1000), quantity:5 });
      stage.materials.push({material:new Material(1, "block", 'Consequatur est quas', 2000), quantity:2 });
      stage.materials.push({material:new Material(2, "ladrillo", 'Consequatur est quas', 3000), quantity:8 });
      stage.invoices.push(new Invoice(0, new Date(), '1xx2', 3000));
      stage.invoices.push(new Invoice(2, new Date(), '1xx3', 4000));
      stage.invoices.push(new Invoice(3, new Date(), '1xx4', 5000));
      this.stages.push(stage);
    }
    console.log(this.stages);




   }

  ngOnInit() {
  }

}
