import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNewsV16SignalsComponent } from './angular-news-v16-signals.component';

describe('AngularNewsV16SignalsComponent', () => {
  let component: AngularNewsV16SignalsComponent;
  let fixture: ComponentFixture<AngularNewsV16SignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularNewsV16SignalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularNewsV16SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('computes amount as payment times quantity minus writeoff', () => {
    component.quantitySignal.set(4);
    component.paymentSignal.set(10);
    component.writeoffSignal.set(6);

    expect(component.amountSignal()).toBe(34);
  });

  it('syncs the disabled amount control from the computed signal', () => {
    component.form.patchValue({
      quantity: 3,
      payment: 10,
      writeoff: 5,
    });
    fixture.detectChanges();

    expect(component.amountSignal()).toBe(25);
    expect(component.form.controls.amount.value).toBe(25);
  });

  it('marks the form invalid when required payment fields are empty', () => {
    component.form.patchValue({
      quantity: null,
      payment: null,
      writeoff: 0,
    });
    fixture.detectChanges();

    expect(component.form.valid).toBe(false);
    expect(component.statusText).toBe('INVALID');
  });
});
