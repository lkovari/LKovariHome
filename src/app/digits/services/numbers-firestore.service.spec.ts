import { TestBed } from '@angular/core/testing';

import { NumbersFirestoreService } from '../numbers-firestore.service';

describe('NumbersFirestoreService', () => {
  let service: NumbersFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
