import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNewsComponent } from './angular-news.component';

describe('AngularNewsComponent', () => {
  let component: AngularNewsComponent;
  let fixture: ComponentFixture<AngularNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularNewsComponent]
    });
    fixture = TestBed.createComponent(AngularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
