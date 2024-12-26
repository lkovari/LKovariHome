import { ErrorHandler, inject, Injectable, Signal, signal } from '@angular/core';
import { ErrorEntry } from '../../models/error-entry.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly router = inject(Router);
  // private readonly zone = inject(NgZone);
  private errorEntries = signal<ErrorEntry[]>([])

  constructor() { }

  handleError(error: any): void {
    this.addError(error);
    // this.zone.run(() => {
    //   this.router.navigate(['/error']);
    // });
  }

  clearErrorEntries(): void {
    this.errorEntries.set([]);
  }

  getErrorEntriesSignal(): Signal<ErrorEntry[]> {
    return this.errorEntries;
  }

  getErrorEntries(): ErrorEntry[] {
    return this.errorEntries();
  }

  private addError(error: any): void {
    const timestamp = new Date().toISOString();
    const message = error.message || error.toString();
    const stack = error.stack || 'No stack trace available';
    const route = this.router.url;

    const errorEntry: ErrorEntry = { timestamp, message, stack, route };
    this.errorEntries.update((entries) => [...entries, errorEntry]);
    console.log(`Errors : ${this.errorEntries().length}`);
  }
}
