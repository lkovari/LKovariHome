import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNewsV16SignalsComponent } from './angular-news-v16-signals.component';

describe('AngularNewsV16SignalsComponent', () => {
  let component: AngularNewsV16SignalsComponent;
  let fixture: ComponentFixture<AngularNewsV16SignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AngularNewsV16SignalsComponent]
});
    fixture = TestBed.createComponent(AngularNewsV16SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
