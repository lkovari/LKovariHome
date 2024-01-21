import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableWizardMainComponent } from './customizable-wizard-main.component';

describe('CustomizableWizardMainComponent', () => {
  let component: CustomizableWizardMainComponent;
  let fixture: ComponentFixture<CustomizableWizardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizableWizardMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizableWizardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
