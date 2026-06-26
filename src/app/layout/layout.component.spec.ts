import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  function createLayoutWithUrl(url: string): {
    fixture: ComponentFixture<LayoutComponent>;
    navigateSpy: ReturnType<typeof vi.spyOn>;
  } {
    const fixture = TestBed.createComponent(LayoutComponent);
    const navigateSpy = vi.spyOn(router, 'navigate');

    Object.defineProperty(router, 'url', {
      configurable: true,
      get: () => url,
    });

    fixture.detectChanges();

    return { fixture, navigateSpy };
  }

  it('redirects to home when the layout opens at the root URL', () => {
    const { navigateSpy } = createLayoutWithUrl('/');

    expect(navigateSpy).toHaveBeenCalledWith(['/layout-pages/home']);
  });

  it('does not redirect when the layout opens on another page', () => {
    const { navigateSpy } = createLayoutWithUrl('/layout-pages/about-me');

    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('reports extra-small breakpoints from the media observer', () => {
    const { fixture } = createLayoutWithUrl('/layout-pages/home');

    expect(fixture.componentInstance.isScreenXs()).toBe(false);
  });
});
