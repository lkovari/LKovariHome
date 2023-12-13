import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundLayoutComponent } from './playground-layout.component';

describe('PlaygroundLayoutComponent', () => {
  let component: PlaygroundLayoutComponent;
  let fixture: ComponentFixture<PlaygroundLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaygroundLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
