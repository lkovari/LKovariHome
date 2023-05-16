import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive(
  // the selection target is the img HTML element excludes those where noLazy attribute is exists
  { selector: 'img:not([noLazy])' }
)
export class ImageLazyLoadingDirective
  extends Directive
  implements AfterViewInit
{
  constructor(private elementRef: ElementRef<HTMLImageElement>) {
    super();
  }

  ngAfterViewInit(): void {
    const img = this.elementRef.nativeElement;
    if ('loading' in HTMLImageElement.prototype) {
      img.setAttribute('loading', 'lazy');
      console.log(
        '>>> Attribute loading="lazy" is set to img element src="' +
          img.src +
          '"'
      );
    } else {
      console.log('>>> loading lazy is NOT supported!');
    }
  }
}
