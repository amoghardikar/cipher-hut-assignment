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
import { EmployeeSercvice  } from './Services/emp-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GlobalLoaderComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    NavService,
    EmployeeSercvice,
    HttpClientModule,
    HttpClient,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
