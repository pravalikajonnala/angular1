import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  template:`
<input [id]="myId" type="text" value="Angular"><br>

<input disabled="false" [id]="myId" type="text" value="Sample"><br>
<button (click)="onClick()">greet</button><br>

<button (click)="greeting='event binding with interpolation '">Event binding</button><br>
{{greeting}}<br>

<input [(ngModel)]="laddu" type="text">
{{laddu}}

 <h2 *ngIf="true"> ngIf DIRECTIVE </h2><br>  


<div *ngIf="displayName;then thenBlock; else elseBlock">INLINE ngIf DIRECTIVE </div>
<ng-template #thenBlock>
<h2>true block</h2>
</ng-template>
<ng-template #elseBlock>
<h2>else is displayed</h2>
</ng-template><br>

<div [ngSwitch]="color">
<div *ngSwitchCase="'ngswitch'">It's ngswitch </div>
<div *ngSwitchCase="'ngIf'">It's ngIf </div>
<div *ngSwitchCase="'ngFor'">It's ngFor</div>
<div *ngSwitchDefault>Pick again</div>
</div>

<div *ngFor="let color of colors; indes as i">
<h2>{{i}}{{color}}</h2>
</div>

<h2>{{"Hello " + parentData}}</h2>

<button (click)="fireEvent()">PARENT EVENT</button>


  <h2>{{pipe}}</h2>
  <h2>{{pipe|lowercase}}</h2>
  <h2>{{pipe|uppercase}}</h2>
  <h2>{{pipe|titlecase}}</h2>  
  <h2>{{pipe|slice:2:4}}</h2>


  <h2>{{person| json}}</h2>

  <h2>{{5.678|number:'1.2-3'}}</h2>
  <h2>{{5.678|number:'3.4-5'}}</h2>

  <h2>{{0.25|percent}}</h2>
  <h2>{{0.25|currency}}</h2>

  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
` ,
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
public name="pravalika";
public laddu="";
public color="ngswitch";
public displayName="true";
public myId="testid";
 public greeting="";
 public pipe="jsonpipe"
 public colors=["red","blue","green","pink"];
 public person={
   "firstname":"pravalika",
   "lastname":"jonnala",
 }
 public date =new Date();
 @Output() public childEvent=new  EventEmitter();
 @Input() public parentData;
  constructor() { }
ngOnInit() {}
greetUser(){
  return "Hello " + this.name;
}
onClick(){
  console.log("welcome to codevolution"); 
}
fireEvent(){
this.childEvent.emit('Hey Pravalika');
}
}
