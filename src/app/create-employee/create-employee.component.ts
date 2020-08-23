import { Component, OnInit } from '@angular/core';
import { EmployeeSercvice } from '../Services/emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  model: any = {};
  constructor(private empService: EmployeeSercvice, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
    if (this.model['employee_name'].length < 5) {
      alert('Name cannot be less than 5 characters');
    } else {
      this.empService.createEmployee(this.model).subscribe(
        (res) => {
          console.log(res);
          if (res['status'] == 'success') {
            alert('Employee created successfully');
            this.router.navigate(['employee-list']);
          }
        },
        (err) => {
          alert('Error while creating employee');
        }
      );
    }
  }
}
