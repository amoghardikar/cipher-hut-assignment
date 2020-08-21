import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Constants } from '../Constants'
@Injectable()
export class EmployeeSercvice {
    employees = [];
    constructor(private http: HttpClient){}
    getEmployeesFromAPI(){
        return this.http.get(Constants.HOST + 'employees')
    }

    setEmployees(emplist){
        this.employees = emplist
    }

    createEmployee(){

    }

    updateEmployee(){

    }
    deleteEmployee(){

    }
    getEmployeeStoredList(){
        return this.employees
    }

    geEmployeetDetails(empid){
        const result = this.employees.find( ({ id }) => id === empid );
        console.log(result)
        return result
    }
}