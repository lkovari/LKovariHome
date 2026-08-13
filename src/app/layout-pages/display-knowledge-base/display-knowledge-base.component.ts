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
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist';

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

GlobalWorkerOptions.workerSrc = new URL(
  'assets/pdfjs/pdf.worker.min.mjs',
  document.baseURI,
).toString();

@Component({
  selector: 'app-display-knowledge-base',
  templateUrl: './display-knowledge-base.component.html',
  styleUrl: './display-knowledge-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, RouterLink],
})
export class DisplayKnowledgeBaseComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly kind = input.required<string>();
  readonly viewer = viewChild<ElementRef<HTMLElement>>('viewer');
  readonly pagesHost = viewChild<ElementRef<HTMLElement>>('pagesHost');

  readonly entry = computed(() => KNOWLEDGE_BASES[this.kind()] ?? null);
  readonly pageTitle = computed(() => this.entry()?.title ?? '');
  readonly pdfHref = computed(() => this.entry()?.url ?? '');
  readonly loading = signal(false);
  readonly errorMessage = signal('');

  private renderGeneration = 0;
  private pdfDocument: PDFDocumentProxy | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimer: ReturnType<typeof setTimeout> | null = null;
  private lastRenderWidth = 0;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.renderGeneration += 1;
      if (this.resizeTimer !== null) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeObserver?.disconnect();
      void this.pdfDocument?.destroy();
      this.pdfDocument = null;
    });

    effect(() => {
      const entry = this.entry();
      if (!entry) {
        untracked(() => {
          void this.router.navigate(['/not-found']);
        });
        return;
      }

      const viewerRef = this.viewer();
      const pagesRef = this.pagesHost();
      if (!viewerRef || !pagesRef) {
        return;
      }

      const viewerEl = viewerRef.nativeElement;
      const pagesEl = pagesRef.nativeElement;
      this.observeViewerWidth(viewerEl, pagesEl, entry.url);
      const generation = ++this.renderGeneration;
      void this.renderPdf(entry.url, viewerEl, pagesEl, generation);
    });
  }

  private observeViewerWidth(
    viewerEl: HTMLElement,
    pagesEl: HTMLElement,
    url: string,
  ): void {
    this.resizeObserver?.disconnect();
    this.lastRenderWidth = viewerEl.clientWidth;
    this.resizeObserver = new ResizeObserver(() => {
      const width = viewerEl.clientWidth;
      if (Math.abs(width - this.lastRenderWidth) < 12) {
        return;
      }
      if (this.resizeTimer !== null) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(() => {
        this.lastRenderWidth = width;
        const generation = ++this.renderGeneration;
        void this.renderPdf(url, viewerEl, pagesEl, generation);
      }, 180);
    });
    this.resizeObserver.observe(viewerEl);
  }

  private async renderPdf(
    url: string,
    viewerEl: HTMLElement,
    pagesEl: HTMLElement,
    generation: number,
  ): Promise<void> {
    this.loading.set(true);
    this.errorMessage.set('');
    pagesEl.replaceChildren();

    try {
      if (this.pdfDocument) {
        await this.pdfDocument.destroy();
        this.pdfDocument = null;
      }

      const absoluteUrl = new URL(url, document.baseURI).toString();
      const loadingTask = getDocument(absoluteUrl);
      const pdf = await loadingTask.promise;
      if (generation !== this.renderGeneration) {
        await pdf.destroy();
        return;
      }

      this.pdfDocument = pdf;
      const availableWidth = Math.max(viewerEl.clientWidth - 16, 280);

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        if (generation !== this.renderGeneration) {
          return;
        }

        const page = await pdf.getPage(pageNumber);
        const baseViewport = page.getViewport({ scale: 1 });
        const scale = availableWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
          continue;
        }

        const outputScale = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        canvas.style.display = 'block';
        canvas.style.maxWidth = '100%';
        canvas.style.background = '#fff';
        canvas.style.boxShadow = '0 0.125rem 0.5rem rgba(40, 53, 147, 0.12)';
        context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        await page.render({
          canvasContext: context,
          viewport,
        }).promise;

        if (generation !== this.renderGeneration) {
          return;
        }

        pagesEl.appendChild(canvas);
      }

      this.lastRenderWidth = viewerEl.clientWidth;
    } catch (error: unknown) {
      if (generation !== this.renderGeneration) {
        return;
      }
      const message =
        error instanceof Error ? error.message : 'Failed to load the PDF.';
      this.errorMessage.set(message);
    } finally {
      if (generation === this.renderGeneration) {
        this.loading.set(false);
      }
    }
  }
}
