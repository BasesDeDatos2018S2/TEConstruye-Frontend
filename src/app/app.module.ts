import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { FormsModule } from '@angular/forms';
import { ViewMaterialsComponent } from './components/view-materials/view-materials.component';
import { StagesComponent } from './components/stages/stages.component';
import { EditStageComponent } from './components/edit-stage/edit-stage.component';
import { ViewStageComponent } from './components/view-stage/view-stage.component';
import { LoginComponent } from './components/login/login.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditClientComponent,
    ViewMaterialsComponent,
    StagesComponent,
    EditStageComponent,
    ViewStageComponent,
    LoginComponent,
    ViewEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
