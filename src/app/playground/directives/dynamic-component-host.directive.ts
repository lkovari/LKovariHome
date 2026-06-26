import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({ selector: '[appDynamicComponentHost]' })
export class DynamicComponentHostDirective {
  viewContainer = inject(ViewContainerRef);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);


  constructor() { }

}
