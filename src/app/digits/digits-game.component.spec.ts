import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitsGameComponent } from './digits-game.component';

describe('DigitsGameComponent', () => {
  let component: DigitsGameComponent;
  let fixture: ComponentFixture<DigitsGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DigitsGameComponent]
});
    fixture = TestBed.createComponent(DigitsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
