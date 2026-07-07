import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { NumbersFirestoreService } from './digits/services/numbers-firestore.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'layout-pages/home',
        loadComponent: () => import('./layout-pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'layout-pages/about-me',
        loadComponent: () => import('./layout-pages/about-me/about-me.component').then(m => m.AboutMeComponent),
      },
      {
        path: 'layout-pages/awards',
        loadComponent: () => import('./layout-pages/awards/awards.component').then(m => m.AwardsComponent),
      },
    ],
  },
  {
    path: '',
    loadComponent: () => import('./angular-news/angular-news.component').then(m => m.AngularNewsComponent),
    children: [
      {
        path: 'angular-news-pages/angular-news-v16-signals',
        loadComponent: () =>
          import('./angular-news-pages/angular-news-v16-signals/angular-news-v16-signals.component').then(
            m => m.AngularNewsV16SignalsComponent
          ),
      },
      {
        path: 'angular-news-pages/angular-news-v15-standalone',
        loadComponent: () =>
          import('./angular-news-pages/angular-news-v15-standalone/angular-news-v15-standalone.component').then(
            m => m.AngularNewsV15StandaloneComponent
          ),
      },
    ],
  },
  {
    path: 'digits/digits-game',
    loadComponent: () => import('./digits/digits-game.component').then(m => m.DigitsGameComponent),
    providers: [
      NumbersFirestoreService,
      importProvidersFrom(
        AngularFireModule.initializeApp(environment.firebasePuzzleData),
        AngularFirestoreModule
      ),
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./material-examples/material-examples-layout/material-examples-layout.component').then(
        m => m.MaterialExamplesLayoutComponent
      ),
    children: [
      {
        path: 'material-examples/components/material-examples-main',
        loadComponent: () =>
          import('./material-examples/components/material-examples-main/material-examples-main.component').then(
            m => m.MaterialExamplesMainComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./playground/playground-layout/playground-layout.component').then(m => m.PlaygroundLayoutComponent),
    children: [
      {
        path: 'playground/components/nested-example',
        loadComponent: () =>
          import('./playground/components/nested-example/nested-example.component').then(m => m.NestedExampleComponent),
      },
      {
        path: 'playground/components/customizable-wizard',
        loadComponent: () =>
          import('./playground/components/customizable-wizard/customizable-wizard-main.component').then(
            m => m.CustomizableWizardMainComponent
          ),
      },
      {
        path: 'playground/components/slide-toggle-example',
        loadComponent: () =>
          import('./playground/components/slide-toggle-example/slide-toggle-example.component').then(
            m => m.SlideToggleExampleComponent
          ),
      },
      {
        path: 'playground/components/labyrinth-generator',
        loadComponent: () =>
          import('./playground/components/labyrinth-generator/labyrinth-generator.component').then(
            m => m.LabyrinthGeneratorComponent
          ),
      },
    ],
  },
  {
    path: 'error',
    loadComponent: () => import('./error/error.component').then(c => c.ErrorComponent),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
