import { Component, OnInit } from '@angular/core';

import { EmployeeSercvice } from '../Services/emp-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
   emplist = [];
  constructor(private empService: EmployeeSercvice) {}

  ngOnInit(): void {
    this.empService.getEmployeesFromAPI().subscribe(
      (res) => {
        console.log(res)
        if(res['status'] = 'success'){
          this.empService.setEmployees(res['data'])
          this.emplist = this.empService.getEmployeeStoredList();
          console.log( this.emplist)
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
