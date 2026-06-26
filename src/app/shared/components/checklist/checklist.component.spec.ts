import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ChecklistComponent } from './checklist.component';

@Component({
  template: `
    <form [formGroup]="form">
      <app-checklist formControlName="checklist" [elementRef]="checklistElementRef" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, ChecklistComponent]
})
class TestHostComponent {
  checklistElementRef = new ElementRef(document.createElement('div'));
  form = new FormGroup({
    checklist: new FormControl([])
  });
}

describe('ChecklistComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
