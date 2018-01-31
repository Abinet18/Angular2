import { Directive, ElementRef,Renderer2,Output,EventEmitter, HostListener } from '@angular/core';


@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  private colors:string[];
  @Output() public colorEmitter:EventEmitter<string>;

  constructor(private element:ElementRef,private renderer2:Renderer2) { 
    this.colors=['green','red','yellow','orange','black','blue','cyan','purple'];
    this.colorEmitter=new EventEmitter();
  }
  @HostListener('click') changeMyColor()
  {
    let i=Math.floor(Math.random()*this.colors.length);
    this.renderer2.setStyle(this.element.nativeElement,'color',this.colors[i]);
    this.colorEmitter.emit(this.colors[i]);
  }

}
