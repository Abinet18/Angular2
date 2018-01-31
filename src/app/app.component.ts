import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Main App component</h1>
             <app-child ></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorChildElement:string;
  title = 'app';
}
