import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Constants } from '../Constants'
@Injectable()
export class EmployeeSercvice {
    employees = [];
    constructor(private http: HttpClient){}
    getEmployees(){
        return this.http.get(Constants.HOST + 'employees')
    }

    setEmployees(){

    }

    createEmployee(){

    }

    updateEmployee(){

    }
    deleteEmployee(){

    }

    geEmployeetDetails(id){

    }
}