import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';

import { DisplayKnowledgeBaseComponent } from './display-knowledge-base.component';
import { KnowledgeBaseFirestoreService } from './knowledge-base-firestore.service';

const EMAIL_SESSION_KEY = 'knowledgeBaseEmail';

describe('DisplayKnowledgeBaseComponent', () => {
  let navigateSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    sessionStorage.removeItem(EMAIL_SESSION_KEY);

    await TestBed.configureTestingModule({
      imports: [DisplayKnowledgeBaseComponent],
      providers: [
        provideMarkdown(),
        {
          provide: KnowledgeBaseFirestoreService,
          useValue: {
            getKnowledgeBase: () =>
              Promise.resolve({ markdown: '# Hello', locale: 'en' }),
            logAccess: () => Promise.resolve(),
          },
        },
      ],
    }).compileComponents();

    navigateSpy = vi.spyOn(TestBed.inject(Router), 'navigate');
  });

  afterEach(() => {
    sessionStorage.removeItem(EMAIL_SESSION_KEY);
    vi.restoreAllMocks();
  });

  function createComponent(): ComponentFixture<DisplayKnowledgeBaseComponent> {
    const fixture = TestBed.createComponent(DisplayKnowledgeBaseComponent);
    fixture.componentRef.setInput('kind', 'angular');
    fixture.detectChanges();
    return fixture;
  }

  function footerGoTopButton(
    fixture: ComponentFixture<DisplayKnowledgeBaseComponent>,
  ): HTMLButtonElement | undefined {
    const buttons = fixture.nativeElement.querySelectorAll(
      '.knowledge-base-footer button',
    );
    for (const button of buttons) {
      if (
        button instanceof HTMLButtonElement &&
        button.textContent?.trim() === 'Go Top'
      ) {
        return button;
      }
    }
    return undefined;
  }

  it('renders Back and Go Top in the footer on the email gate', () => {
    const fixture = createComponent();
    const content = fixture.nativeElement.textContent;

    expect(content).toContain('Back');
    expect(content).toContain('Go Top');
    expect(footerGoTopButton(fixture)).toBeDefined();
  });

  it('does not throw when Go Top is pressed before the viewer exists', () => {
    const fixture = createComponent();

    expect(() => fixture.componentInstance.goToTop()).not.toThrow();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('scrolls the markdown viewer to the top without navigating', async () => {
    sessionStorage.setItem(EMAIL_SESSION_KEY, 'reader@example.com');
    const fixture = createComponent();
    await fixture.whenStable();
    fixture.detectChanges();

    const viewer = fixture.nativeElement.querySelector('.knowledge-base-viewer');
    expect(viewer).toBeInstanceOf(HTMLElement);
    if (!(viewer instanceof HTMLElement)) {
      return;
    }

    const scrollTo = vi.fn();
    viewer.scrollTo = scrollTo;
    const goTop = footerGoTopButton(fixture);
    expect(goTop).toBeDefined();
    if (!goTop) {
      return;
    }

    goTop.click();

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
