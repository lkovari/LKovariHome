import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { routes } from './app.routes';

@Component({
  template: '<router-outlet />',
  imports: [RouterOutlet],
})
class RoutingHostComponent {}

function childPaths(routeConfig: Routes): string[] {
  return routeConfig.flatMap(route => {
    const paths: string[] = [];
    if (route.path && route.path !== '**') {
      paths.push(route.path);
    }
    if (route.children) {
      paths.push(...childPaths(route.children));
    }
    return paths;
  });
}

describe('app routes', () => {
  describe('route configuration', () => {
    it('redirects unknown paths to the not-found page', () => {
      const wildcardRoute = routes.find(route => route.path === '**');

      expect(wildcardRoute?.redirectTo).toBe('not-found');
    });

    it('registers the layout content pages', () => {
      const layoutRoute = routes.find(route => route.loadComponent && route.children?.some(
        child => child.path === 'layout-pages/home'
      ));
      const layoutChildPaths = childPaths(layoutRoute?.children ?? []);

      expect(layoutChildPaths).toEqual(
        expect.arrayContaining([
          'layout-pages/home',
          'layout-pages/about-me',
          'layout-pages/awards',
        ])
      );
    });

    it('registers the digits game route with Firebase providers', () => {
      const digitsRoute = routes.find(route => route.path === 'digits/digits-game');

      expect(digitsRoute?.loadComponent).toBeDefined();
      expect(digitsRoute?.providers?.length).toBeGreaterThan(0);
    });

    it('registers the playground demo routes', () => {
      const playgroundRoute = routes.find(route => route.children?.some(
        child => child.path === 'playground/components/nested-example'
      ));
      const playgroundChildPaths = childPaths(playgroundRoute?.children ?? []);

      expect(playgroundChildPaths).toEqual(
        expect.arrayContaining([
          'playground/components/nested-example',
          'playground/components/customizable-wizard',
          'playground/components/slide-toggle-example',
        ])
      );
    });

    it('registers the angular news demo routes', () => {
      const newsRoute = routes.find(route => route.children?.some(
        child => child.path === 'angular-news-pages/angular-news-v16-signals'
      ));
      const newsChildPaths = childPaths(newsRoute?.children ?? []);

      expect(newsChildPaths).toEqual(
        expect.arrayContaining([
          'angular-news-pages/angular-news-v16-signals',
          'angular-news-pages/angular-news-v15-standalone',
        ])
      );
    });
  });

  describe('navigation', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RoutingHostComponent],
      }).compileComponents();
    });

    async function navigate(url: string): Promise<Router> {
      const fixture = TestBed.createComponent(RoutingHostComponent);
      const router = TestBed.inject(Router);

      await router.navigateByUrl(url);
      fixture.detectChanges();
      await fixture.whenStable();

      return router;
    }

    it('navigates to the home page route', async () => {
      const router = await navigate('/layout-pages/home');

      expect(router.url).toBe('/layout-pages/home');
    });

    it('navigates to the about-me page route', async () => {
      const router = await navigate('/layout-pages/about-me');

      expect(router.url).toBe('/layout-pages/about-me');
    });

    it('navigates to the awards page route', async () => {
      const router = await navigate('/layout-pages/awards');

      expect(router.url).toBe('/layout-pages/awards');
    });

    it('navigates to the error page route', async () => {
      const router = await navigate('/error');

      expect(router.url).toBe('/error');
    });

    it('redirects unknown URLs to the not-found page', async () => {
      const router = await navigate('/this-route-does-not-exist');

      expect(router.url).toBe('/not-found');
    });
  });
});
