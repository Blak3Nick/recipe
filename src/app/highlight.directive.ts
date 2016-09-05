import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
   @HostListener('mouseenter') mouseover(){
     this.backgroundColor = 'green';
   };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'white';
  };
   @HostBinding('style.backgroundColor') get setColor() {
     return this.backgroundColor;
   };
   @HostListener('click', ['$event'])
    onClick(event) {
     console.log('Success' + event.target);
   }
   private backgroundColor = 'white';
  constructor(private elementREf: ElementRef, private renderer: Renderer) {
    //this.elementREf.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementREf.nativeElement, 'background-color', 'blue');
  }

}
