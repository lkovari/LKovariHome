import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: '', loadChildren: () => import('./angular-news/angular-news.module').then(m => m.AngularNewsModule) },
  { path: '', loadChildren: () => import('./digits/digits.module').then(m => m.DigitsModule) },
  { path: '', loadChildren: () => import('./material-examples/material-examples.module').then(m => m.MaterialExamplesModule) },
  { path: '', loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule) },
  { path: 'error', loadComponent: () => import('./error/error.component').then(c => c.ErrorComponent) },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  // https://angular.io/guide/router#!#browser-url-styles
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
