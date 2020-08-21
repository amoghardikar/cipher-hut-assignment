import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NavService } from './services/nav-service';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSercvice  } from './Services/emp-service.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'
import { CustomFormsModule } from 'ng2-validation';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component'
import { ConfirmationDialogService } from './Services/confirmation-dialog.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GlobalLoaderComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  providers: [ 
    NavService,
    EmployeeSercvice,
    HttpClientModule,
    HttpClient,
    ConfirmationDialogService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },],
    entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
