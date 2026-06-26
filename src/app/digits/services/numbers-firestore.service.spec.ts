import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { NumbersFirestoreService } from './numbers-firestore.service';

describe('NumbersFirestoreService', () => {
  let service: NumbersFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NumbersFirestoreService,
        {
          provide: AngularFirestore,
          useValue: {
            collection: () => ({
              add: () => Promise.resolve(),
              doc: () => ({
                update: () => Promise.resolve(),
                delete: () => Promise.resolve()
              })
            })
          }
        }
      ]
    });
    service = TestBed.inject(NumbersFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
