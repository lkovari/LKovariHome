import { TestBed } from '@angular/core/testing';
import { WaitSpinnerService } from './wait-spinner.service';

describe('WaitSpinnerService', () => {
  let service: WaitSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitSpinnerService);
  });

  it('is hidden when no callers are waiting', () => {
    expect(service.visible()).toBe(false);
  });

  it('shows while refCount is above zero and hides at zero', () => {
    service.begin();
    expect(service.visible()).toBe(true);
    service.begin();
    expect(service.visible()).toBe(true);
    service.end();
    expect(service.visible()).toBe(true);
    service.end();
    expect(service.visible()).toBe(false);
  });

  it('does not go below zero', () => {
    service.end();
    expect(service.visible()).toBe(false);
    service.begin();
    expect(service.visible()).toBe(true);
    service.end();
    expect(service.visible()).toBe(false);
  });
});
