import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStageLevelsComponent } from './game-stage-levels.component';

describe('GameStageLevelsComponent', () => {
  let component: GameStageLevelsComponent;
  let fixture: ComponentFixture<GameStageLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GameStageLevelsComponent]
});
    fixture = TestBed.createComponent(GameStageLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
