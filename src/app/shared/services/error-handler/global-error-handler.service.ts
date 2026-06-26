import { ErrorHandler, inject, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorNotificationService } from './error-notification.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly errorNotification = inject(ErrorNotificationService);
  private readonly ngZone = inject(NgZone);

  handleError(error: unknown): void {
    const derivedError = this.extractError(error);

    this.ngZone.run(() => {
      if (derivedError instanceof HttpErrorResponse) {
        this.errorNotification.addError(derivedError, true);
        console.error('A HTTP error occurred:', derivedError.message);
        return;
      }

      this.errorNotification.addError(derivedError);
      console.error('An error occurred:', derivedError instanceof Error ? derivedError.message : derivedError);
    });
  }

  private extractError(error: unknown): unknown {
    if (error && typeof error === 'object') {
      const wrappedError = error as { rejection?: unknown; originalError?: unknown };
      if (wrappedError.rejection) {
        return wrappedError.rejection;
      }
      if (wrappedError.originalError) {
        return wrappedError.originalError;
      }
    }

    return error;
  }
}
