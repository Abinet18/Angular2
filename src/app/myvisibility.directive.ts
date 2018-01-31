import { Directive, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  @Input('myvisibility') visible:boolean;
  constructor(private element:ElementRef,private renderer2:Renderer2) {
    
   console.log(this.visible);
   }
   ngAfterContentInit()
   {
    console.log(this.visible);
    let display=this.visible?'block':'none';
    this.renderer2.setStyle(this.element.nativeElement,'display',display);
   }

}
