import { ErrorHandler, inject, Injectable, signal } from '@angular/core';
import { ErrorEntry } from '../../models/error-entry.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly router = inject(Router);
  // private readonly zone = inject(NgZone);
  hasErrorOccurred = signal(false);
  public static errorEntries: ErrorEntry[] = [];

  constructor() { }

  handleError(error: any): void {
    this.addError(error);
    // this.zone.run(() => {
    //   this.router.navigate(['/error']);
    // });
  }

  private addError(error: any): void {
    const timestamp = new Date().toISOString();
    const message = error.message || error.toString();
    const stack = error.stack || 'No stack trace available';
    const route = this.router.url;

    const errorEntry: ErrorEntry = { timestamp, message, stack, route };
    GlobalErrorHandlerService.errorEntries.push(errorEntry);
    this.hasErrorOccurred.set(true);
    console.log(`Errors : ${GlobalErrorHandlerService.errorEntries.length}`);
  }
}
