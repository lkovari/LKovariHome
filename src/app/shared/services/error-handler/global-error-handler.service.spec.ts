import { TestBed } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';

import { GlobalErrorHandlerService } from './global-error-handler.service';
import { ErrorNotificationService } from './error-notification.service';

describe('GlobalErrorHandlerService', () => {
  let errorHandler: ErrorHandler;
  let errorNotification: ErrorNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
      ],
    });
    errorHandler = TestBed.inject(ErrorHandler);
    errorNotification = TestBed.inject(ErrorNotificationService);
  });

  it('should add runtime errors to the notification service', () => {
    errorHandler.handleError(new Error('Global Exception Handler Test'));

    const entries = errorNotification.currentErrorEntries();
    expect(entries.length).toBe(1);
    expect(entries[0]?.message).toBe('Global Exception Handler Test');
  });
});
