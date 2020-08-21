import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSercvice } from '../Services/emp-service.service';
import { Location } from '@angular/common';
import { ConfirmationDialogService } from '../Services/confirmation-dialog.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id;
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeSercvice,
    private location: Location,
    private router: Router,
    private dialogService: ConfirmationDialogService
  ) {}
  employeeDetails;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['empid']);
    this.id = this.route.snapshot.params['empid'];
    this.employeeDetails = this.empService.geEmployeetDetails(this.id);
  }
  back() {
    this.location.back();
  }
  edit() {
    let empid = this.id;
    this.router.navigate(['/edit-employee', { empid: empid }]);
  }

  delete() {
    this.dialogService
      .confirm()
      .then((confirmerd) => {
        if(confirmerd){
          this.empService.deleteEmployee(this.id).subscribe(
            (res) => {
              if (res['status'] == 'success') {
                alert(res['message']);
                this.router.navigate(['/employee-list'])
              } else {
                alert('Error while deleting employee');
              }
            },
            (err) => {
              alert('Error while deleting employee');
            }
          );
        }
    
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
}
