import { TestBed } from '@angular/core/testing';

import { StageCommunicationService } from './stage-communication.service';

describe('StageCommunicationService', () => {
  let service: StageCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
