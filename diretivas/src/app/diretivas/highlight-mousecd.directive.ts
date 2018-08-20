import { Directive, HostListener, ElementRef, HostBinding, Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMousecd]'
})
export class HighlightMousecdDirective {

  @HostListener('mouseleave') onMouseLeave(){
    // this.elementRef.nativeElement.style.backgroundColor = 'orange';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','orange');
    this.bgColor = 'gray';
  }
  @HostListener('mouseenter') onMouseEnter(){
    // this.elementRef.nativeElement.style.backgroundColor = 'orange';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','gray');
    this.bgColor = 'orange';
  }

  @HostBinding('style.background-color') get bgcolor(){
    return this.bgColor;
  }

  private bgColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}
