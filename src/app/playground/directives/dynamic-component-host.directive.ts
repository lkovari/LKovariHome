import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamicComponentHost]',
    standalone: false
})
export class DynamicComponentHostDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
