import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[content-host]',
})

export class MapperPageContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
