import 'zone.js/testing';
import { getTestBed, TestModuleMetadata } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideFaIcons } from './app/shared/fa-icons.initializer';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

const testBed = getTestBed();
const configureTestingModule = testBed.configureTestingModule.bind(testBed);

testBed.configureTestingModule = (moduleDef: TestModuleMetadata) => {
  return configureTestingModule({
    ...moduleDef,
    providers: [
      ...(moduleDef.providers ?? []),
      provideRouter([]),
      provideHttpClient(withXhr()),
      provideHttpClientTesting(),
      provideNoopAnimations(),
      provideFaIcons(),
    ],
  });
};
