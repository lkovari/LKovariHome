import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorNotificationService } from './error-notification.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorNotification = inject(ErrorNotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        const stackTrace = new Error().stack || 'No stack trace available';
        const errorEntry = errorNotification.addError(error, true);
        errorEntry.stack = stackTrace;
        console.error('HTTP Interceptor caught an error:', error);
      }
      return throwError(() => error);
    })
  );
};