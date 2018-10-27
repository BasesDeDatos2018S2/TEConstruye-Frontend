import { Component, OnInit } from '@angular/core';
import { Stage } from '../../classes/stage';
import { Material } from '../../classes/material';
import { Invoice } from '../../classes/invoice';
@Component({
  selector: 'app-view-stage',
  templateUrl: './view-stage.component.html',
  styleUrls: ['./view-stage.component.css']
})
export class ViewStageComponent implements OnInit {
    stage:Stage;
    invoices_headers:string[];
    materials_headers:string[];
  constructor() {
    this.invoices_headers=["Serial", "Fecha de compra", "Monto","Proveedor" ]
    this.materials_headers=["Nombre", "Cantidad", "Precio por unidad","Total" ]
    this.stage =  new Stage(0, 1, "Cimientos", "Cumque cum totam sunt quia numquam. Dicta praesentium ea repellendus a illum voluptatem odio omnis. Est porro est earum asperiores nam. Iusto aliquam eum eum officiis iste et eum.  Earum nobis atque molestiae vel fuga minus id architecto. Est cupiditate magni iure in vel. Deserunt dolorem quaerat distinctio non neque. Voluptas commodi itaque voluptatem iusto tenetur dolores. Rerum et iure odit voluptas dolorum rerum. Dolor labore eveniet delenit totam qui officia omnis. Fugiat non sunt in sapiente iste. Mollitia eos dolores et excepturi velit qui totam eum.", false, new Date(), new Date(), [],[] , 6000,600 );
    this.stage.materials.push(new Material(0, "varilla", 'Consequatur est quas', 1000));
    this.stage.materials.push(new Material(1, "block", 'Consequatur est quas', 2000) );
    this.stage.materials.push(new Material(2, "ladrillo", 'Consequatur est quas', 3000));
    this.stage.invoices.push(new Invoice(0, new Date(), '1xx2', 3000, "EPA"));
    this.stage.invoices.push(new Invoice(2, new Date(), '1xx3', 4000, "EPA"));
    this.stage.invoices.push(new Invoice(3, new Date(), '1xx4', 5000, "EPA"));
  }

  ngOnInit() {
  }

}
