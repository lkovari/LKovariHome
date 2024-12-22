import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageLevelComponent } from './stage-level.component';

describe('StageLevelComponent', () => {
  let component: StageLevelComponent;
  let fixture: ComponentFixture<StageLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [StageLevelComponent]
});
    fixture = TestBed.createComponent(StageLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
