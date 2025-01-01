import { inject, Injectable } from '@angular/core';
import { ErrorEntry } from '../../models/error-entry.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  private readonly router = inject(Router);
  private errorSource = new BehaviorSubject<ErrorEntry[]>([]);
  currentErrorEntries$ = this.errorSource.asObservable();

  private errorEntries: ErrorEntry[] = [];

  constructor() { }

  resetErrors(): void {
    this.errorEntries = [];
    this.errorSource.next(this.errorEntries);
  }

  addError(error: any, isHttp: boolean = false): ErrorEntry {
    const timestamp = new Date().toISOString();
    const message = error.message || error.toString();
    const stack = error.stack || 'No stack trace available';
    const route = isHttp ? error.url : this.router.url;
    const status = error.status || 'No status available';
    const errorEntry: ErrorEntry = { timestamp, message, stack, route, status };

    this.changeErrorEntries([...this.errorEntries, errorEntry]);
    console.log(`Errors: ${this.errorEntries.length}`);
    return errorEntry
  }

  private changeErrorEntries(errorEntries: ErrorEntry[]): void {
    this.errorEntries = errorEntries;
    this.errorSource.next(this.errorEntries);
  }
}
