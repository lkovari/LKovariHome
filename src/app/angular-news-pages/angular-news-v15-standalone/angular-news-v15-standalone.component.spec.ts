import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNewsV15StandaloneComponent } from './angular-news-v15-standalone.component';

describe('AngularNewsV15StandaloneComponent', () => {
  let component: AngularNewsV15StandaloneComponent;
  let fixture: ComponentFixture<AngularNewsV15StandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [AngularNewsV15StandaloneComponent]
});
    fixture = TestBed.createComponent(AngularNewsV15StandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
