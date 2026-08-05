import { enableProdMode, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withDebugTracing, withHashLocation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { httpErrorInterceptor } from './app/shared/services/error-handler/http-error.interceptor';
import { GlobalErrorHandlerService } from './app/shared/services/error-handler/global-error-handler.service';
import { provideFaIcons } from './app/shared/fa-icons.initializer';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(routes, withHashLocation(), withComponentInputBinding(), withDebugTracing()),
    provideFaIcons(),
    provideHttpClient(withXhr(), withInterceptors([httpErrorInterceptor])),
    provideAnimations(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.light-mode',
        },
      },
    }),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
}).catch(err => console.error(err));
