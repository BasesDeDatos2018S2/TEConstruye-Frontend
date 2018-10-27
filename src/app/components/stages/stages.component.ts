import { Component, OnInit , Input} from '@angular/core';
import { Stage } from '../../classes/stage';
import { Project } from '../../classes/project';
import { Material } from '../../classes/material';
import { Invoice } from '../../classes/invoice';
import { StagesService } from '../../services/stages.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  @Input() projectId:number;
  stages_list:Stage[];
  header_list:string[];

  constructor(private stagesService: StagesService,private projectsService: ProjectsService) {
    // this.stages=[];



    this.stages_list=[];
    this.header_list=["Nombre","Descripcion","Completado","Costo estimado","Costo real","Fecha de inicio", "Fecha de entrega","Opciones"];
    let stages_titles =["Cimientos", "Piso","Paredes"];
    console.log(this.stages_list);
   }

  ngOnInit() {
this.updateData();
  }


  updateData(){
    this.stages_list=[];
    this.projectsService.getProject(this.projectId).subscribe(data => {
      for(let stageID of data.idStages ){
        this.stagesService.getStage(stageID).subscribe(data => {
          this.stages_list.push(data);
          // console.log("EtapaXXX:", data);
        })
        // console.log("Etapas:", this.stages_list);
      }
    });

  }
}
