import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExamplesLayoutComponent } from './material-examples-layout.component';

describe('MaterialExamplesLayoutComponent', () => {
  let component: MaterialExamplesLayoutComponent;
  let fixture: ComponentFixture<MaterialExamplesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MaterialExamplesLayoutComponent]
});
    fixture = TestBed.createComponent(MaterialExamplesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
