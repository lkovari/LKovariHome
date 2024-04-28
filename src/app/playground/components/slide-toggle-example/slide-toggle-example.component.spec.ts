import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleExampleComponent } from './slide-toggle-example.component';

describe('SlideToggleExampleComponent', () => {
  let component: SlideToggleExampleComponent;
  let fixture: ComponentFixture<SlideToggleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggleExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideToggleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
