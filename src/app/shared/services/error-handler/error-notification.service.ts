import { inject, Injectable, signal } from '@angular/core';
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

  addError(error: any, isHttp: boolean = false): ErrorEntry {
    const timestamp = new Date().toISOString();
    const message = error.message || error.toString();
    const stack = error.stack || 'No stack trace available';
    const route = isHttp ? error.url : this.router.url;
    const status = error.status || 'No status available';
    const errorEntry: ErrorEntry = { timestamp, message, stack, route, status };

    this.errorSource.update(errors => [...errors, errorEntry]);
    console.log(`Errors: ${this.errorSource.length}`);
    return errorEntry
  }
}
