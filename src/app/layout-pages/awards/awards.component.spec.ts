import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsComponent } from './awards.component';

describe('AwardsComponent', () => {
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads eight award images with unique ids', () => {
    const ids = component.imageDescriptors.map(descriptor => descriptor.id);

    expect(component.imageDescriptors).toHaveLength(8);
    expect(new Set(ids).size).toBe(8);
  });

    it('marks the first award image as the priority image', () => {
      expect(component.imageDescriptors[0]?.id).toBe(1);
      expect(component.imageDescriptors[0]?.alt).toBe('Leaderboard winner Q2 of 2022');
    });

  it('renders each award alt text in the page', () => {
    const content = fixture.nativeElement.textContent;

    for (const descriptor of component.imageDescriptors) {
      expect(content).toContain(descriptor.alt);
    }
  });
});
