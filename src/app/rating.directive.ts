import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRating]'
})
export class RatingDirective {

  constructor( private el: ElementRef) { }
  
  @HostListener('mouseenter') onmouseenter(){
    this.hilitecolor('green');
  }

   @HostListener('mouseleave') onmouseleave(){
    this.hilitecolor('blue');
  }

  public hilitecolor(color){
    this.el.nativeElement.style.color= color;
  }

}
