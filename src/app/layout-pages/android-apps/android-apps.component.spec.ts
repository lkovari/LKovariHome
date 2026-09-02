import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppsComponent } from './android-apps.component';

describe('AndroidAppsComponent', () => {
  let component: AndroidAppsComponent;
  let fixture: ComponentFixture<AndroidAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidAppsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the heading and Play Store developer URL', () => {
    const content = fixture.nativeElement.textContent;
    const developerLink = fixture.nativeElement.querySelector(
      `a[href="${component.developerUrl}"]`
    );

    expect(content).toContain('Android Apps');
    expect(developerLink).toBeTruthy();
    expect(developerLink?.textContent?.trim()).toBe(component.developerUrl);
    expect(developerLink?.getAttribute('target')).toBe('_blank');
    expect(developerLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('does not render app cards', () => {
    expect(fixture.nativeElement.querySelector('.app-card')).toBeNull();
    expect(fixture.nativeElement.querySelector('.app-grid')).toBeNull();
  });
});
