import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentHostDirective } from './dynamic-component-host.directive';

@Component({
  template: '<ng-template appDynamicComponentHost></ng-template>',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [DynamicComponentHostDirective]
})
class TestHostComponent {}

describe('DynamicComponentHostDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
