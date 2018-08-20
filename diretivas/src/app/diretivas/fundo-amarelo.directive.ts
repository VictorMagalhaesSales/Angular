import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer) { 
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
    // elementRef.nativeElement.style.fontWeight = "bold";

    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", 'yellow');
    
  }

}
