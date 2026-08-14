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
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

interface KnowledgeBaseEntry {
  title: string;
  load: () => Promise<{ default: string }>;
}

const KNOWLEDGE_BASES: Record<string, KnowledgeBaseEntry> = {
  angular: {
    title: 'My collected knowledge base of Angular',
    load: () => import('../../../assets/bigfiles/frontend-knowledge-base.md'),
  },
  dotnet: {
    title: 'My collected knowledge base of .NET and C#',
    load: () => import('../../../assets/bigfiles/backend-knowledge-base.md'),
  },
};

@Component({
  selector: 'app-display-knowledge-base',
  templateUrl: './display-knowledge-base.component.html',
  styleUrl: './display-knowledge-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, RouterLink, MarkdownComponent],
})
export class DisplayKnowledgeBaseComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly kind = input.required<string>();
  readonly viewer = viewChild<ElementRef<HTMLElement>>('viewer');

  readonly entry = computed(() => KNOWLEDGE_BASES[this.kind()] ?? null);
  readonly pageTitle = computed(() => this.entry()?.title ?? '');
  readonly markdown = signal('');
  readonly loading = signal(false);
  readonly errorMessage = signal('');

  private loadGeneration = 0;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.loadGeneration += 1;
    });

    effect(() => {
      const entry = this.entry();
      if (!entry) {
        untracked(() => {
          void this.router.navigate(['/not-found']);
        });
        return;
      }

      const generation = ++this.loadGeneration;
      untracked(() => {
        void this.loadMarkdown(entry, generation);
      });
    });
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
    entry: KnowledgeBaseEntry,
    generation: number,
  ): Promise<void> {
    this.loading.set(true);
    this.errorMessage.set('');
    this.markdown.set('');

    try {
      const module = await entry.load();
      if (generation !== this.loadGeneration) {
        return;
      }
      this.markdown.set(module.default);
    } catch (error: unknown) {
      if (generation !== this.loadGeneration) {
        return;
      }
      const message =
        error instanceof Error
          ? error.message
          : 'Failed to load the knowledge base.';
      this.errorMessage.set(message);
    } finally {
      if (generation === this.loadGeneration) {
        this.loading.set(false);
      }
    }
  }
}
