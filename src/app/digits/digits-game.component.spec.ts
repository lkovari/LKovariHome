import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ClipboardService } from 'ngx-clipboard';
import { CookieService } from 'ngx-cookie-service';

import { DigitsGameComponent } from './digits-game.component';
import { NumbersFirestoreService } from './services/numbers-firestore.service';

describe('DigitsGameComponent', () => {
  let component: DigitsGameComponent;
  let fixture: ComponentFixture<DigitsGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DigitsGameComponent],
      providers: [
        {
          provide: NumbersFirestoreService,
          useValue: {
            getAll: () => ({
              snapshotChanges: () => of([])
            }),
            create: () => Promise.resolve(),
            update: () => Promise.resolve(),
            delete: () => Promise.resolve()
          }
        },
        {
          provide: CookieService,
          useValue: {
            get: () => '',
            set: () => undefined,
            delete: () => undefined,
            check: () => false
          }
        },
        {
          provide: ClipboardService,
          useValue: {
            copy: () => true
          }
        }
      ]
    });
    fixture = TestBed.createComponent(DigitsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
