import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExamplesMainComponent } from './material-examples-main.component';

describe('MaterialExamplesMainComponent', () => {
  let component: MaterialExamplesMainComponent;
  let fixture: ComponentFixture<MaterialExamplesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MaterialExamplesMainComponent]
});
    fixture = TestBed.createComponent(MaterialExamplesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
