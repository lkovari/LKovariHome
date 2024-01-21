import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardProgressComponent } from './wizard-progress.component';

describe('WizardProgressComponent', () => {
  let component: WizardProgressComponent;
  let fixture: ComponentFixture<WizardProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
