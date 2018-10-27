import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { Material } from '../../classes/material';
import { MaterialsService } from '../../services/materials.service';

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
  material_to_edit: Material;
  header_list: string[] = [];
  constructor(private materialsService: MaterialsService) {
    this.add_material = false;
    this.edit_material = false;
    this.material_to_add = new Material(1, "", "", 0);
    this.material_to_edit = new Material(1, "", "", 0);
    this.header_list = ["Nombre", "Descripcion", "Precio", "", ""];
    this.materialsService.getMaterials().subscribe(data => {
      console.log("data:", data);
      this.material_list = data;
    });

    // console.log(this.material_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.material_to_add.id = this.material_list.length;
    this.material_list.push(this.material_to_add);
    this.add_material = false;
  }

  onSubmitEdit() {
    for (let material of this.material_list) {
      if (material.id === this.material_to_edit.id) {
        material = this.material_to_edit;
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
    console.log("delete", id);
    this.materialsService.deleteMaterial(id).subscribe(
          data => {
              console.log("DELETE Request is successful ", data);
              this.updateMaterialList();
          },
          error => {
              console.log("Error", error);
          }
      );




  }


  updateMaterialList(){
    console.log("updateMaterialList");
    this.materialsService.getMaterials().subscribe(data => {
      console.log("data:", data);
      this.material_list = data;
    });
  }
}
