import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  template: `<h2>employee details</h2>
  <h2>Fetching data from json File</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
  </ul>`,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
 public employees=[];
 
  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(data =>this.employees = data);
  }

}
