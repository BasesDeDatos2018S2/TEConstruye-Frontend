import { Component, OnInit } from '@angular/core';
import { Stage } from '../../classes/stage';
import { Material } from '../../classes/material';
import { Invoice } from '../../classes/invoice';
import { StagesService } from '../../services/stages.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  stages_list:Stage[];
  header_list:string[];

  constructor(private stagesService: StagesService) {
    // this.stages=[];
    this.stagesService.getStages().subscribe(data => {
      console.log("data:", data);
      this.stages_list = data;
    });




    this.header_list=["Nombre","Descripcion","Completado","Costo estimado","Costo real","Opciones"];
    let stages_titles =["Cimientos", "Piso","Paredes"];
    let id =0;
    // for(let t of stages_titles){
    //   let stage =  new Stage(id++, 1, t, "Chrorrear cemento", false, new Date(), new Date(), [],[] , 10000*id,600*id);
    //   stage.materials.push(new Material(0, "varilla", 'Consequatur est quas', 1000));
    //   stage.materials.push(new Material(1, "block", 'Consequatur est quas', 2000));
    //   stage.materials.push(new Material(2, "ladrillo", 'Consequatur est quas', 3000));
    //   stage.invoices.push(new Invoice(0, new Date(), '1xx2', 3000, "EPA"));
    //   stage.invoices.push(new Invoice(2, new Date(), '1xx3', 4000, "EPA"));
    //   stage.invoices.push(new Invoice(3, new Date(), '1xx4', 5000, "EPA"));
    //   this.stages.push(stage);
    // }
    console.log(this.stages_list);




   }

  ngOnInit() {
  }

}
