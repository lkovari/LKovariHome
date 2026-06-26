import { inject, Injectable, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorEntry } from '../../models/error-entry.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  private readonly router = inject(Router);
  private errorSource = signal<ErrorEntry[]>([]);

  readonly currentErrorEntries = this.errorSource.asReadonly();

  constructor() { }

  resetErrors(): void {
    this.errorSource.set([]);
  }

  addError(error: unknown, isHttp: boolean = false): ErrorEntry {
    const timestamp = new Date().toISOString();
    const message = this.getErrorMessage(error);
    const stack = this.getErrorStack(error);
    const route = isHttp && error instanceof HttpErrorResponse ? error.url ?? this.router.url : this.router.url;
    const status = error instanceof HttpErrorResponse ? String(error.status) : 'No status available';
    const errorEntry: ErrorEntry = { timestamp, message, stack, route, status };

    this.errorSource.update(errors => [...errors, errorEntry]);
    return errorEntry;
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    if (error instanceof HttpErrorResponse) {
      return error.message;
    }

    if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
      return error.message;
    }

    return String(error);
  }

  private getErrorStack(error: unknown): string {
    if (error instanceof Error && error.stack) {
      return error.stack;
    }

    return 'No stack trace available';
  }
}
