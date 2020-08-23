import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../Constants';
@Injectable()
export class EmployeeSercvice {
  employees = [];
  constructor(private http: HttpClient) {}
  getEmployeesFromAPI() {
    return this.http.get(Constants.HOST + 'employees');
  }

  setEmployees(emplist) {
    this.employees = emplist;
  }

  createEmployee(empJson) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let body = {};
    body['name'] = empJson['employee_name'];
    body['salary'] = empJson['employee_salary'];
    body['age'] = empJson['employee_age'];
    console.log(body);
    return this.http.post(Constants.HOST + 'create', body, {
      headers: headers,
    });
  }

  updateEmployee(id: any, empJson: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let body = {};
    body['name'] = empJson['employee_name'];
    body['salary'] = empJson['employee_salary'];
    body['age'] = empJson['employee_age'];
    console.log(body);
    return this.http.put(Constants.HOST + 'update/' + id, body, {
      headers: headers,
    });
  }
  deleteEmployee(empid) {
    return this.http.delete(Constants.HOST + 'delete/' + empid)
  }
  getEmployeeStoredList() {
    return this.employees;
  }

  geEmployeetDetails(empid) {
    return this.http.get(Constants.HOST + 'employee/' + empid)
  }
}
