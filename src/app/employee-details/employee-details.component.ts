import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeSercvice } from '../Services/emp-service.service';
import {Location} from '@angular/common'; 
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private empService: EmployeeSercvice, private location: Location) {}
employeeDetails;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['empid'])
    let id = this.route.snapshot.params['empid'];
    this.employeeDetails = this.empService.geEmployeetDetails(id);
  

    
  }
  back(){
    this.location.back();
  }
  edit(){
    
  }
}
