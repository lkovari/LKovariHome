import 'zone.js/testing';
import { APP_INITIALIZER } from '@angular/core';
import { getTestBed, TestModuleMetadata } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAward, faGlobe, faHome, faPerson } from '@fortawesome/free-solid-svg-icons';

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
      provideHttpClient(),
      provideHttpClientTesting(),
      provideNoopAnimations(),
      {
        provide: APP_INITIALIZER,
        multi: true,
        useFactory: (library: FaIconLibrary) => {
          library.addIcons(faHome, faPerson, faGlobe, faAward, faGithub);
          return () => undefined;
        },
        deps: [FaIconLibrary],
      },
    ],
  });
};
