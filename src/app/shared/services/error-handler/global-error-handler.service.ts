import { ErrorHandler, inject, Injectable } from '@angular/core';
import { ErrorEntry } from '../../models/error-entry.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  router = inject(Router);
  errorEntries: ErrorEntry[] = [];
  constructor() { }
  handleError(error: any): void {
    const timestamp = new Date().toISOString();
    const message = error.message ? error.message : error.toString();
    const stack = error.stack ? error.stack : 'No stack trace available';
    const route = this.router.url;
    const errorEntry = { timestamp, message, stack, route };
    this.errorEntries.push(errorEntry);
    console.error(error);
  }
}
