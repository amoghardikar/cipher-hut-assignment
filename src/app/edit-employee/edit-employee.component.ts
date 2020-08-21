import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSercvice } from '../Services/emp-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  model: any = {};
  id;
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeSercvice
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['empid'];
    this.model = this.empService.geEmployeetDetails(id);
    console.log(this.model);
  }
  onSubmit() {
    this.empService.updateEmployee(this.id, this.model).subscribe(
      (res) => {
        console.log(res);
        if(res['status'] == 'success'){
          alert('Employee updated successfully.')
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
