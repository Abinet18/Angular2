import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <ul>
    <h2>Child Component</h2>
    <p>List of names:<br></p>
    <li *ngFor="let name of names">{{name}}</li>
    </ul>
    <p upper>This text is printed in upper case</p>
    <p [myvisibility]="false">This is not Visble</p>
    <div [myvisibility]="true">This is visible</div>  
    <div mycolor (colorEmitter)="processColorChildElement($event)">Click to Play with colors</div>
    <p>Color of the directive element in child:<strong>{{colorChildElement}}</strong></p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
 colorChildElement:string;
 @Output() colorEmitter2:EventEmitter<string>;
 public names:string[];
  constructor() {
    this.names=['John','Greg','Lance'];
    this.colorEmitter2=new EventEmitter();
   }

  ngOnInit() {
  }
  processColorChildElement(color)
  {
    this.colorChildElement=color;
    this.colorEmitter2.emit(color);
  }

}
