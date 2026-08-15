import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VERSION } from '@angular/core';

import { HomeComponent } from './home.component';
import { KnowledgeBaseFirestoreService } from '../display-knowledge-base/knowledge-base-firestore.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: KnowledgeBaseFirestoreService,
          useValue: {
            getUniqueVisitorCounts: () =>
              Promise.resolve({ angular: 3, dotnet: 1 }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets the copyright year to the current year', () => {
    expect(component.years).toBe(new Date().getFullYear());
  });

  it('renders the welcome message, Angular version, and migration summary', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain('Welcome to this website');
    expect(content).toContain(`v${VERSION.full}`);
    expect(content).toContain('Official Angular migrations');
    expect(content).toContain('NgStyle → style bindings');
    expect(content).toContain('Signal queries');
    expect(content).toContain('Signal inputs (input())');
    expect(content).toContain('Angular 14 → 22');
    expect(content).toContain(String(new Date().getFullYear()));
  });

  it('renders unique visitor counts next to knowledge-base links', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const content = fixture.nativeElement.textContent;
    expect(content).toContain('3 readers');
    expect(content).toContain('1 reader');
  });
});
