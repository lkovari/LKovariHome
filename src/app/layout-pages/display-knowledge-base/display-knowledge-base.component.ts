import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { FirebaseError } from 'firebase/app';
import { KnowledgeBaseFirestoreService } from './knowledge-base-firestore.service';
import {
  domainHasMailExchanger,
  emailDomain,
} from '../../shared/services/email-mx/email-mx-check';
import {
  NetworkLoadError,
  networkLoadTimeoutMs,
  withTimeout,
} from '../../shared/services/network-load/network-load-timeout';
import { WaitSpinnerService } from '../../shared/services/wait-spinner/wait-spinner.service';

const KNOWLEDGE_BASE_TITLES: Record<string, string> = {
  angular: 'My collected knowledge base of Angular',
  dotnet: 'My collected knowledge base of .NET and C#',
};

const EMAIL_SESSION_KEY = 'knowledgeBaseEmail';
const MX_LOOKUP_TIMEOUT_CAP_MS = 8_000;

@Component({
  selector: 'app-display-knowledge-base',
  templateUrl: './display-knowledge-base.component.html',
  styleUrl: './display-knowledge-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    MarkdownComponent,
  ],
})
export class DisplayKnowledgeBaseComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly knowledgeBaseStore = inject(KnowledgeBaseFirestoreService);
  private readonly waitSpinner = inject(WaitSpinnerService);

  readonly kind = input.required<string>();
  readonly viewer = viewChild<ElementRef<HTMLElement>>('viewer');

  readonly pageTitle = computed(
    () => KNOWLEDGE_BASE_TITLES[this.kind()] ?? '',
  );
  readonly emailControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });
  readonly accessEmail = signal('');
  readonly markdown = signal('');
  readonly errorMessage = signal('');
  readonly mxError = signal('');

  private loadGeneration = 0;

  constructor() {
    const storedEmail = sessionStorage.getItem(EMAIL_SESSION_KEY);
    if (storedEmail) {
      this.emailControl.setValue(storedEmail);
      if (this.emailControl.valid) {
        this.accessEmail.set(storedEmail);
      }
    }

    this.destroyRef.onDestroy(() => {
      this.loadGeneration += 1;
    });

    effect(() => {
      const kind = this.kind();
      const title = KNOWLEDGE_BASE_TITLES[kind];
      if (!title) {
        untracked(() => {
          void this.router.navigate(['/not-found']);
        });
        return;
      }

      const accessEmail = this.accessEmail();
      if (!accessEmail) {
        return;
      }

      const generation = ++this.loadGeneration;
      untracked(() => {
        void this.loadMarkdown(kind, accessEmail, generation);
      });
    });
  }

  async submitEmail(event: Event): Promise<void> {
    event.preventDefault();
    this.emailControl.markAsTouched();
    this.mxError.set('');
    if (this.emailControl.invalid) {
      return;
    }

    const value = this.emailControl.value.trim().toLowerCase();
    const domain = emailDomain(value);
    if (!domain) {
      this.emailControl.setErrors({ email: true });
      return;
    }

    this.waitSpinner.begin();
    try {
      if (!navigator.onLine) {
        this.mxError.set(
          'You appear to be offline. Check your connection and try again.',
        );
        return;
      }

      const acceptsMail = await withTimeout(
        domainHasMailExchanger(domain),
        Math.min(networkLoadTimeoutMs(), MX_LOOKUP_TIMEOUT_CAP_MS),
        'Could not verify the email domain in time. Check your connection and try again.',
      );
      if (!acceptsMail) {
        this.mxError.set(
          'This email domain cannot receive mail. Please use an address on a domain that accepts email.',
        );
        return;
      }

      sessionStorage.setItem(EMAIL_SESSION_KEY, value);
      this.accessEmail.set(value);
    } catch (error: unknown) {
      if (error instanceof NetworkLoadError) {
        this.mxError.set(error.message);
        return;
      }
      this.mxError.set(
        'Could not verify the email domain. Check your connection and try again.',
      );
    } finally {
      this.waitSpinner.end();
    }
  }

  retryLoad(): void {
    const kind = this.kind();
    const accessEmail = this.accessEmail();
    if (!KNOWLEDGE_BASE_TITLES[kind] || !accessEmail) {
      return;
    }
    const generation = ++this.loadGeneration;
    void this.loadMarkdown(kind, accessEmail, generation);
  }

  goToTop(): void {
    this.viewer()?.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onViewerClick(event: MouseEvent): void {
    const eventTarget = event.target;
    if (!(eventTarget instanceof Element)) {
      return;
    }

    const anchor = eventTarget.closest('a');
    if (!(anchor instanceof HTMLAnchorElement)) {
      return;
    }

    const href = anchor.getAttribute('href');
    if (!href || !href.startsWith('#') || href.startsWith('#/')) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const id = decodeURIComponent(href.slice(1));
    if (!id) {
      return;
    }

    const viewerEl = this.viewer()?.nativeElement;
    if (!viewerEl) {
      return;
    }

    const destination = viewerEl.querySelector(`#${CSS.escape(id)}`);
    if (!(destination instanceof HTMLElement)) {
      return;
    }

    destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private async loadMarkdown(
    kind: string,
    email: string,
    generation: number,
  ): Promise<void> {
    this.errorMessage.set('');
    this.markdown.set('');
    this.waitSpinner.begin();

    try {
      if (!navigator.onLine) {
        throw new NetworkLoadError(
          'offline',
          'You appear to be offline. Check your connection and try again.',
        );
      }

      const document = await withTimeout(
        this.knowledgeBaseStore.getKnowledgeBase(kind),
        networkLoadTimeoutMs(),
      );
      if (generation !== this.loadGeneration) {
        return;
      }
      if (!document) {
        this.errorMessage.set('The knowledge base was not found.');
        return;
      }

      this.markdown.set(document.markdown);
      void this.knowledgeBaseStore
        .logAccess({
          email,
          locale: navigator.language || document.locale,
          knowledgeBaseId: kind,
        })
        .catch(() => undefined);
    } catch (error: unknown) {
      if (generation !== this.loadGeneration) {
        return;
      }
      this.errorMessage.set(knowledgeBaseLoadMessage(error));
    } finally {
      this.waitSpinner.end();
    }
  }
}

function knowledgeBaseLoadMessage(error: unknown): string {
  if (error instanceof NetworkLoadError) {
    return error.message;
  }

  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return 'You appear to be offline. Check your connection and try again.';
  }

  if (error instanceof FirebaseError) {
    if (error.code === 'permission-denied') {
      return 'The knowledge base could not be loaded (permission denied).';
    }
    if (
      error.code === 'unavailable' ||
      error.code === 'deadline-exceeded'
    ) {
      return 'The knowledge base could not be loaded. Check your connection and try again.';
    }
  }

  return 'The knowledge base could not be loaded. Please try again.';
}
