import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(templRef: TemplateRef<any>, vContainer: ViewContainerRef) { }

}
