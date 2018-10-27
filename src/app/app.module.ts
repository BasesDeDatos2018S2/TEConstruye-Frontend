import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {DpDatePickerModule} from 'ng2-date-picker';
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
import { ViewPayrollComponent } from './components/view-payroll/view-payroll.component';
import { MaterialsService } from './services/materials.service';
import { EmployeesService } from './services/employees.service';
import { ProjectsService } from './services/projects.service';
import { StagesService } from './services/stages.service';
import { LoginService } from './services/login.service';
import { ViewProjectsComponent } from './components/view-projects/view-projects.component';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';
import { ViewReportsComponent } from './components/view-reports/view-reports.component';
import { PayrollsService } from './services/payrolls.service';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { Observable } from 'rxjs';

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
    ViewEmployeesComponent,
    ViewProjectsComponent,
    ViewClientsComponent,
    ViewReportsComponent,
    ViewPayrollComponent,
    ViewProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DpDatePickerModule


  ],
  providers: [
    MaterialsService,
    EmployeesService,
    StagesService,
    ProjectsService,
    PayrollsService,
    LoginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
