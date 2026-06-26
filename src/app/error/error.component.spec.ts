import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { ErrorNotificationService } from '../shared/services/error-handler/error-notification.service';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let errorNotification: ErrorNotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent],
    }).compileComponents();

    errorNotification = TestBed.inject(ErrorNotificationService);
    errorNotification.resetErrors();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows an empty state when no errors were logged', () => {
    expect(component.errorEntries()).toHaveLength(0);
    expect(fixture.nativeElement.textContent).toContain('No errors logged.');
  });

  it('lists logged errors from the notification service', () => {
    errorNotification.addError(new Error('Digits stage failed'));
    fixture.detectChanges();

    expect(component.errorEntries()).toHaveLength(1);
    expect(fixture.nativeElement.textContent).toContain('Digits stage failed');
    expect(fixture.nativeElement.textContent).toContain('TimeStamp:');
  });
});
