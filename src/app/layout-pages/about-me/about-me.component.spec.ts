import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('exposes the profile asset paths', () => {
    expect(component.fullImagePath).toBe('assets/images/lk_cv_pics.png');
    expect(component.fullInsightImagePath).toBe('assets/images/lk_insightprofilebricks.jpg');
    expect(component.fullInsightImagePathHref).toBe(
      'assets/bigfiles/LaszloKovari-InsightsDiscoveryPersonalProfile.pdf'
    );
  });

  it('sets the copyright year to the current year', () => {
    expect(component.years).toBe(new Date().getFullYear());
  });

  it('renders the profile image and CV download link', () => {
    const profileImage = fixture.nativeElement.querySelector('img[alt="myself"]');
    const cvLink = fixture.nativeElement.querySelector('a[href="assets/bigfiles/lk-cv-en.pdf"]');

    expect(profileImage?.getAttribute('src')).toBe('assets/images/lk_cv_pics.png');
    expect(cvLink?.textContent).toContain('László Kővári');
  });
});
