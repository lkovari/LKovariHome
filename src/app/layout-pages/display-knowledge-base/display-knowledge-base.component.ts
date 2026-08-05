import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

interface KnowledgeBaseEntry {
  title: string;
  url: string;
}

const KNOWLEDGE_BASES: Record<string, KnowledgeBaseEntry> = {
  angular: {
    title: 'My collected knowledge base of Angular',
    url: 'assets/bigfiles/Frontend-knowledge-base.pdf',
  },
  dotnet: {
    title: 'My collected knowledge base of .NET and C#',
    url: 'assets/bigfiles/Backend-knowledge-base.pdf',
  },
};

@Component({
  selector: 'app-display-knowledge-base',
  templateUrl: './display-knowledge-base.component.html',
  styleUrl: './display-knowledge-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, RouterLink],
})
export class DisplayKnowledgeBaseComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);

  readonly kind = input.required<string>();

  readonly entry = computed(() => KNOWLEDGE_BASES[this.kind()] ?? null);

  readonly pageTitle = computed(() => this.entry()?.title ?? '');

  readonly safePdfUrl = computed(() => {
    const entry = this.entry();
    if (!entry) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(entry.url);
  });

  constructor() {
    effect(() => {
      const entry = this.entry();
      if (!entry) {
        untracked(() => {
          void this.router.navigate(['/not-found']);
        });
      }
    });
  }
}
