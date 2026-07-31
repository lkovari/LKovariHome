import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { MersenneComponent } from './mersenne.component';

describe('MersenneComponent', () => {
  let component: MersenneComponent;
  let fixture: ComponentFixture<MersenneComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MersenneComponent],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(MersenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const enReq = httpMock.expectOne('assets/bigfiles/mersenne-en.md');
    const huReq = httpMock.expectOne('assets/bigfiles/mersenne-hu.md');
    enReq.flush('# English doc');
    huReq.flush('# Hungarian doc');
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('defaults engine to bigint and max exponent to 127', () => {
    expect(component.form.controls.engine.value).toBe('bigint');
    expect(component.form.controls.maxExponent.value).toBe(127);
  });

  it('loads documentation on init and defaults to English', () => {
    expect(component.docEn()).toBe('# English doc');
    expect(component.docHu()).toBe('# Hungarian doc');
    expect(component.hungarianSelected()).toBe(false);
    expect(component.activeDoc()).toBe('# English doc');
  });

  it('opens the documentation dialog', () => {
    component.openDocs();
    expect(component.docsVisible()).toBe(true);
  });

  it('clears previous results before a new start run', async () => {
    component.output.set('stale line that must disappear');
    component.form.controls.maxExponent.setValue(2);
    await component.start();
    expect(component.output()).toBe('P=2  M=3');
    expect(component.output()).not.toContain('stale');
  });
});
