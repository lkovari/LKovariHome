import { Component } from '@angular/core';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { provideFaIcons } from './app/shared/fa-icons.initializer';

@Component({
  template: '',
  standalone: true,
})
class TestStubComponent {}

const testRoutes: Routes = [
  { path: 'layout-pages/home', component: TestStubComponent },
  { path: 'layout-pages/about-me', component: TestStubComponent },
  { path: 'layout-pages/awards', component: TestStubComponent },
  { path: 'error', component: TestStubComponent },
  { path: 'not-found', component: TestStubComponent },
  { path: '**', redirectTo: 'not-found' },
];

const providers = [
  provideRouter(testRoutes),
  provideHttpClient(withXhr()),
  provideHttpClientTesting(),
  provideNoopAnimations(),
  provideFaIcons(),
];

export default providers;
