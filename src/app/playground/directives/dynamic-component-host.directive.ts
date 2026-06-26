import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appDynamicComponentHost]' })
export class DynamicComponentHostDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
