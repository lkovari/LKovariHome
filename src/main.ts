import { enableProdMode, ErrorHandler, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { httpErrorInterceptor } from './app/shared/services/error-handler/http-error.interceptor';
import { GlobalErrorHandlerService } from './app/shared/services/error-handler/global-error-handler.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideHttpClient(withXhr(), withInterceptors([httpErrorInterceptor])),
    provideAnimations(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.light-mode'
        }
      }
    }),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ]
}).catch(err => console.error(err));
