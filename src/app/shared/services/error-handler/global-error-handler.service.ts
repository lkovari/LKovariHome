import { ErrorHandler, inject, Injectable, NgZone, signal } from '@angular/core';
import { ErrorEntry } from '../../models/error-entry.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  public static errorEntries = signal<ErrorEntry[]>([]);

  constructor() { }

  handleError(error: any): void {
    this.zone.run(() => {
      this.addError(error);
    });
  }

  resetErrors(): void {
    GlobalErrorHandlerService.errorEntries.set([]);
  }

  private addError(error: any): void {
    const timestamp = new Date().toISOString();
    const message = error.message || error.toString();
    const stack = error.stack || 'No stack trace available';
    const route = this.router.url;

    const errorEntry: ErrorEntry = { timestamp, message, stack, route };
    GlobalErrorHandlerService.errorEntries().push(errorEntry);
    GlobalErrorHandlerService.errorEntries.set([...GlobalErrorHandlerService.errorEntries()]);
    console.log(`Errors : ${GlobalErrorHandlerService.errorEntries.length}`);
  }
}
