import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VERSION } from '@angular/core';

import { AngularVersionComponent } from './angular-version.component';

describe('AngularVersionComponent', () => {
  let component: AngularVersionComponent;
  let fixture: ComponentFixture<AngularVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularVersionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates and exposes the runtime Angular version', () => {
    expect(component).toBeTruthy();
    expect(component.angularVersion).toBe(VERSION.full);
  });

  it('renders the featured version badge by default', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain(`v${VERSION.full}`);
    expect(content).toContain('Angular runtime');
  });

  it('renders compact header copy when compact is true', () => {
    fixture.componentRef.setInput('compact', true);
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;

    expect(content).toContain(`Built with Angular v${VERSION.full}`);
  });
});
