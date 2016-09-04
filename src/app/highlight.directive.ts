import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elementREf: ElementRef, private renderer: Renderer) {
    //this.elementREf.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementREf.nativeElement, 'background-color', 'blue');
  }

}
