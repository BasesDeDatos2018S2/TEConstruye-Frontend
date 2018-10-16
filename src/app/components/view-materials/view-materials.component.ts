import { Component, OnInit } from '@angular/core';
import { Material } from '../../classes/material';


@Component({
  selector: 'app-view-materials',
  templateUrl: './view-materials.component.html',
  styleUrls: ['./view-materials.component.css']
})

export class ViewMaterialsComponent implements OnInit {
  add_material:boolean;
  material_list:Material[]= [];
  material_to_add:Material;
  header_list:string[]=[]
  constructor() {
    this.add_material=false;
    this.material_to_add= new Material(1,"", "", 0)
    this.header_list=["Nombre","Descripcion","Precio"];
    this.material_list.push( new Material(1,"varilla", 'Consequatur est quas id vero aut perspiciatis quod dolor. Libero non ut modi aut reiciendis dolorem expedita. Tenetur sed consequuntur quis debitis eos rerum vel. Dolorem consequatur ut qui laboriosam voluptatibus assumenda reprehenderit dolore. Est quae voluptatem deleniti quod voluptas. Sunt harum ullam dolore minus est dicta deserunt.', 1000) )
    this.material_list.push( new Material(2,"perlin", 'perlin de hierro de 3m', 1000) );
    this.material_list.push( new Material(3,"block", 'brock de 30*10cm', 1000) );
    this.material_list.push( new Material(4,"cemento", 'saco de 50kg4', 1000) );;
    console.log(this.material_list);
  }

  ngOnInit() {
  }
  onSubmit(){
    this.material_list.push(this.material_to_add);
    this.add_material=false;
  }
  show_add_material(){
    this.add_material=true;
  }

}
