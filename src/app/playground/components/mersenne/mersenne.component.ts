import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { DialogModule } from 'primeng/dialog';
import { forkJoin } from 'rxjs';
import { SlideToggleComponent } from '../../../shared/components/slide-toggle/slide-toggle.component';
import {
  MERSENNE_DEFAULT_MAX_EXPONENT,
  MERSENNE_HARD_MAX_EXPONENT,
  MERSENNE_MIN_EXPONENT,
  generateMersennePrimes,
} from './mersenne-prim-generator';
import type { MersenneEngineId } from './mersenne.types';

@Component({
  selector: 'app-mersenne',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    MatHint,
    MatRadioGroup,
    MatRadioButton,
    DialogModule,
    SlideToggleComponent,
  ],
  templateUrl: './mersenne.component.html',
  styleUrl: './mersenne.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MersenneComponent implements OnInit, OnDestroy {
  private readonly http = inject(HttpClient);

  readonly pageTitle = "Mersenne prime generator by L.Kővári '92 / custom arythmetics";
  readonly subTitle = 'Lucas–Lehmer test with BigInt or base-65536 arithmetic';

  readonly running = signal(false);
  readonly status = signal('Idle');
  readonly output = signal('');
  readonly elapsedMs = signal(0);

  readonly elapsedLabel = computed(() => formatElapsed(this.elapsedMs()));
  readonly clearDisabled = computed(() => this.running() || this.output().length === 0);
  readonly saveDisabled = computed(() => this.running() || this.output().length === 0);

  readonly docsVisible = signal(false);
  readonly docsLoading = signal(true);
  readonly hungarianSelected = signal(false);
  readonly docEn = signal('');
  readonly docHu = signal('');

  readonly activeDoc = computed(() =>
    this.hungarianSelected() ? this.docHu() : this.docEn()
  );

  readonly docsDialogHeader = computed(() =>
    this.hungarianSelected()
      ? 'Mersenne-prím dokumentáció'
      : 'Mersenne Prime Documentation'
  );

  readonly form = new FormGroup({
    engine: new FormControl<MersenneEngineId>('bigint', { nonNullable: true }),
    maxExponent: new FormControl(MERSENNE_DEFAULT_MAX_EXPONENT, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(MERSENNE_MIN_EXPONENT),
        Validators.max(MERSENNE_HARD_MAX_EXPONENT),
      ],
    }),
  });

  readonly startDisabled = computed(() => this.running() || this.form.invalid);
  readonly stopDisabled = computed(() => !this.running());

  readonly minExponent = MERSENNE_MIN_EXPONENT;
  readonly defaultMaxExponent = MERSENNE_DEFAULT_MAX_EXPONENT;
  readonly hardMaxExponent = MERSENNE_HARD_MAX_EXPONENT;

  private abortController: AbortController | null = null;
  private elapsedTimerId: ReturnType<typeof setInterval> | null = null;
  private elapsedStartedAt = 0;

  ngOnInit(): void {
    forkJoin({
      en: this.http.get('assets/bigfiles/mersenne-en.md', { responseType: 'text' }),
      hu: this.http.get('assets/bigfiles/mersenne-hu.md', { responseType: 'text' }),
    }).subscribe({
      next: ({ en, hu }) => {
        this.docEn.set(en);
        this.docHu.set(hu);
        this.docsLoading.set(false);
      },
      error: () => {
        this.docEn.set('Failed to load documentation.');
        this.docHu.set('A dokumentáció betöltése sikertelen.');
        this.docsLoading.set(false);
      },
    });
  }

  ngOnDestroy(): void {
    this.abortController?.abort();
    this.stopElapsedTimer();
  }

  openDocs(): void {
    this.docsVisible.set(true);
  }

  async start(): Promise<void> {
    if (this.running() || this.form.invalid) {
      return;
    }

    this.output.set('');
    this.abortController?.abort();
    this.abortController = new AbortController();
    this.running.set(true);
    this.status.set('Running…');
    this.startElapsedTimer();

    const { engine, maxExponent } = this.form.getRawValue();
    const lines: string[] = [];

    try {
      await generateMersennePrimes({
        maxExponent,
        engine,
        signal: this.abortController.signal,
        onProgress: p => {
          this.status.set(`Testing P=${p}`);
        },
        onPrime: hit => {
          lines.push(`P=${hit.p}  M=${hit.decimal}`);
          this.output.set(lines.join('\n'));
        },
      });

      if (this.abortController.signal.aborted) {
        this.status.set('Stopped');
      } else {
        this.status.set('Done');
      }
    } catch {
      this.status.set('Error');
    } finally {
      this.stopElapsedTimer();
      this.running.set(false);
      this.abortController = null;
    }
  }

  stop(): void {
    this.abortController?.abort();
  }

  clearOutput(): void {
    if (this.running()) {
      return;
    }
    this.output.set('');
    this.status.set('Idle');
  }

  saveToFile(): void {
    const content = this.output();
    if (content.length === 0 || this.running()) {
      return;
    }
    const stamp = formatDateTimeStamp(new Date());
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `mersenne-primes-${stamp}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  private startElapsedTimer(): void {
    this.stopElapsedTimer();
    this.elapsedStartedAt = performance.now();
    this.elapsedMs.set(0);
    this.elapsedTimerId = setInterval(() => {
      this.elapsedMs.set(Math.floor(performance.now() - this.elapsedStartedAt));
    }, 100);
  }

  private stopElapsedTimer(): void {
    if (this.elapsedTimerId !== null) {
      clearInterval(this.elapsedTimerId);
      this.elapsedTimerId = null;
    }
    if (this.elapsedStartedAt > 0) {
      this.elapsedMs.set(Math.floor(performance.now() - this.elapsedStartedAt));
    }
  }
}

function formatElapsed(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const tenths = Math.floor((ms % 1000) / 100);
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  return `${mm}:${ss}.${tenths}`;
}

function formatDateTimeStamp(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  return (
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}` +
    `-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
  );
}
