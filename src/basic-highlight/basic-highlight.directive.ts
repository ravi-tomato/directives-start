import { Component, Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elemRef: ElementRef) {}

    ngOnInit(): void {
        console.log(this.elemRef.nativeElement);
        this.elemRef.nativeElement.style.color = "blue";
    }
}