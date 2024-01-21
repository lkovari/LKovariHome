import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableWizardComponent } from './customizable-wizard.component';

describe('CustomizableWizardComponent', () => {
  let component: CustomizableWizardComponent;
  let fixture: ComponentFixture<CustomizableWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizableWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizableWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
