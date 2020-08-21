import { Component, OnInit } from '@angular/core';

import { EmployeeSercvice } from '../Services/emp-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private empService: EmployeeSercvice) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
