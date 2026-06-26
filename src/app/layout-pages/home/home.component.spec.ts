import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets the copyright year to the current year', () => {
    expect(component.years).toBe(new Date().getFullYear());
  });

  it('renders the welcome message and dynamic copyright year', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain('Welcome to this website');
    expect(content).toContain(String(new Date().getFullYear()));
  });
});
