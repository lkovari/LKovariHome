import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[dynamicComponentHost]' })
export class DynamicComponentHostDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
