import { Directive, Renderer, ElementRef, Input, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective implements OnInit{

  @HostListener('mouseleave') onMouseLeave(){
    this.color = this.corLeave;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.color = this.corHover;
  }

  @HostBinding('style.color') color: string;
  
  private bgColor: string;
  @Input() corLeave: string;
  @Input() corPadrao: string;
  @Input() corHover: string;

  ngOnInit(){
    this.color= this.corPadrao;
  }

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

}
