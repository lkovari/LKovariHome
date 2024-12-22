import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameArithmeticOperationsComponent } from './game-arithmetic-operations.component';

describe('GameArithmeticOperationsComponent', () => {
  let component: GameArithmeticOperationsComponent;
  let fixture: ComponentFixture<GameArithmeticOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GameArithmeticOperationsComponent]
});
    fixture = TestBed.createComponent(GameArithmeticOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
