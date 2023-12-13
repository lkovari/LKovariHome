import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedExampleComponent } from './nested-example.component';

describe('NestedExampleComponent', () => {
  let component: NestedExampleComponent;
  let fixture: ComponentFixture<NestedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
