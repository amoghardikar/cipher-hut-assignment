import { Component, OnInit } from '@angular/core';

import { EmployeeSercvice } from '../Services/emp-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  emplist = [];
  constructor(
    private empService: EmployeeSercvice,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.empService.getEmployeesFromAPI().subscribe(
      (res) => {
        console.log(res);
        if ((res['status'] = 'success')) {
          this.empService.setEmployees(res['data']);
          this.emplist = this.empService.getEmployeeStoredList();
          console.log(this.emplist);
        } else {
          alert('Error while fetching data');
        }
      },
      (err) => {
        console.log(err);
        alert('Error while fetching data');
      }
    );
  }

  goToEmpDetails(id) {
    this.router.navigate(['/employee-details', { empid: id }]);
  }

  back() {
    this.location.back();
  }
  createEmployee() {
    this.router.navigate(['/create-employee'])
  }
}
