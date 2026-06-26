import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { CustomizableWizardComponent } from './customizable-wizard.component';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  template: ''
})
class EmptyWizardPageComponent {
  getForm() {
    return new FormGroup({});
  }
}

describe('CustomizableWizardComponent', () => {
  let component: CustomizableWizardComponent;
  let fixture: ComponentFixture<CustomizableWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizableWizardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizableWizardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('wizardData', {
      title: 'Test Wizard',
      description: 'Test Description',
      wizardPages: [{
        index: 0,
        order: 0,
        title: 'Page 1',
        componentName: 'EmptyWizardPageComponent',
        componentType: EmptyWizardPageComponent,
        description: '',
        nextIndex: 0,
        allowBackPage: false,
        allowNextPage: false,
        initialData: [],
        formData: null,
        lastFormStatus: 'VALID'
      }]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
