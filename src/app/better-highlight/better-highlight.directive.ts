import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.color') set highlightColor(color: string) { this.highlightColor = color };
  
  defaultColor: string = 'transparent';
  // highlightColor: string = '';

  ngOnInit(): void {
    
  }
  
  @HostListener('mouseenter') onHover(eventData: Event) {
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.highlightColor);
  }

  @HostListener('mouseleave') onLeave(eventData: Event) {
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.defaultColor);
  }

}
