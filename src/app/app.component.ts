import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Main App component</h1>
            <p>Color of child directive seen in parent: {{colorChildElement}}</p>
             <app-child (colorEmitter2)="colorChildElement=$event" ></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorChildElement:string;
  title = 'app';
}
