import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ChecklistComponent } from './checklist.component';

@Component({
  template: `
    <form [formGroup]="form">
      <app-checklist formControlName="checklist" [checklistItems]="checklistItems" />
    </form>
  `,
  imports: [ReactiveFormsModule, ChecklistComponent]
})
class TestHostComponent {
  checklistItems = [
    { id: 1, label: 'Item 1', selected: false, value: null, normal: false }
  ];
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
