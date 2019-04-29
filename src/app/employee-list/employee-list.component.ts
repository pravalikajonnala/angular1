import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `<h2>Employees list</h2>
  <h2>Fetching data from json file</h2>
  <ul *ngFor="let employee of employees">
  <li><p>{{employee.name}}</p></li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
public employees=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }

}
