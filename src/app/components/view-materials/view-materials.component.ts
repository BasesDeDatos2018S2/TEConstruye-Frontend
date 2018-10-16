import { Component, OnInit } from '@angular/core';
import { Material } from '../../classes/material';


@Component({
  selector: 'app-view-materials',
  templateUrl: './view-materials.component.html',
  styleUrls: ['./view-materials.component.css']
})

export class ViewMaterialsComponent implements OnInit {
  add_material: boolean;
  edit_material: boolean;
  material_list: Material[] = [];
  material_to_add: Material;
  header_list: string[] = []
  constructor() {
    this.add_material = false;
    this.edit_material = false;
    this.material_to_add = new Material(1, "", "", 0)
    this.material_to_edit = new Material(1, "", "", 0)
    this.header_list = ["Nombre", "Descripcion", "Precio", "", ""];
    this.material_list.push(new Material(0, "varilla", 'Consequatur est quas id vero aut perspiciatis quod dolor. Libero non ut modi aut reiciendis dolorem expedita. Tenetur sed consequuntur quis debitis eos rerum vel. Dolorem consequatur ut qui laboriosam voluptatibus assumenda reprehenderit dolore. Est quae voluptatem deleniti quod voluptas. Sunt harum ullam dolore minus est dicta deserunt.', 1000))
    this.material_list.push(new Material(1, "perlin", 'perlin de hierro de 3m', 1000));
    this.material_list.push(new Material(2, "block", 'brock de 30*10cm', 1000));
    this.material_list.push(new Material(3, "cemento", 'saco de 50kg4', 1000));;
    console.log(this.material_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.material_to_add.id=this.material_list.length
    this.material_list.push(this.material_to_add);
    this.add_material = false;
  }
  onSubmitEdit() {
    for (let material of this.material_list) {
      if (material.id === this.material_to_edit.id) {
        material = this.material_to_edit
      }
    }
    this.edit_material = false;

  }

  show_add_material() {
    this.add_material = true;
  }
  show_edit_material(id) {
    console.log("edit:", id);
    this.edit_material = true;
    for (let material of this.material_list) {
      if (material.id === id) {
        this.material_to_edit = material;
        break;
      }
    }
  }
  delete_material(id) {
    console.log("delete", id)

    for (let i = 0; i < this.material_list.length; i++) {
      if (i, this.material_list[i].id == id) {
        console.log(this.material_list[i])
        this.material_list.splice(i, 1);
        break;
      }
    }

  }

}
