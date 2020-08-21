import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent  } from './login/login.component'
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'employee-list', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }