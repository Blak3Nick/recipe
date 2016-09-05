import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
   @HostListener('mouseenter') mouseover(){
     this.backgroundColor = this.highlightColor;
   };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };
   @HostBinding('style.backgroundColor') get setColor() {
     return this.backgroundColor;
   };
   @HostListener('click', ['$event'])
    onClick(event) {
     console.log('Success' + event.target);
   }
   @Input() defaultColor = 'white';
   @Input('highlight') highlightColor = 'green';
   private backgroundColor: string;
  constructor(private elementREf: ElementRef, private renderer: Renderer) {
    //this.elementREf.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementREf.nativeElement, 'background-color', 'blue');
  }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
