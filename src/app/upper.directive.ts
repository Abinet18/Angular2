import { Directive, Renderer2, TemplateRef } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private element:ElementRef,private renderer2:Renderer2
              ) {
             console.log(element.nativeElement.innerHTML);
             }
  ngOnInit()
  {
    console.log();
    let text=this.element.nativeElement.innerHTML;
    text=text.toUpperCase();
    
    this.renderer2.setProperty(this.element.nativeElement,'innerHTML',text);
  }

}
