import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  computeAlignedMazeSize,
  DEFAULT_LABYRINTH_PARAMS,
  LabyrinthParams,
  labyrinthGenAsync,
} from '../labyrinth-engine';

@Component({
  selector: 'app-labyrinth-canvas',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatHint, MatButtonModule],
  templateUrl: './labyrinth-canvas.component.html',
  styleUrl: './labyrinth-canvas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabyrinthCanvasComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  readonly containerRef = viewChild.required<ElementRef<HTMLDivElement>>('canvasContainer');

  readonly generating = signal(false);
  readonly hasGenerated = signal(false);

  readonly paramsForm = new FormGroup({
    step: new FormControl(DEFAULT_LABYRINTH_PARAMS.step, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(100)],
    }),
    probability: new FormControl(DEFAULT_LABYRINTH_PARAMS.probability, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(100)],
    }),
    depth: new FormControl(DEFAULT_LABYRINTH_PARAMS.depth, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(1000)],
    }),
    plr: new FormControl(DEFAULT_LABYRINTH_PARAMS.plr, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(100)],
    }),
  });

  readonly generateLabel = computed(() => (this.hasGenerated() ? 'Regenerate' : 'Generate'));

  private resizeObserver: ResizeObserver | null = null;
  private resizeDebounceId: ReturnType<typeof setTimeout> | null = null;

  ngAfterViewInit(): void {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.scheduleResize());
      this.resizeObserver.observe(this.containerRef().nativeElement);
    }

    window.addEventListener('resize', this.onWindowResize);
    this.destroyRef.onDestroy(() => {
      this.resizeObserver?.disconnect();
      window.removeEventListener('resize', this.onWindowResize);
      if (this.resizeDebounceId !== null) {
        clearTimeout(this.resizeDebounceId);
      }
    });
    this.scheduleResize();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.scheduleResize());
    });
  }

  private readonly onWindowResize = (): void => {
    this.scheduleResize();
  };

  async onGenerate(): Promise<void> {
    if (this.paramsForm.invalid || this.generating()) {
      return;
    }

    this.generating.set(true);
    try {
      await this.runGeneration();
      this.hasGenerated.set(true);
    } finally {
      this.generating.set(false);
    }
  }

  private scheduleResize(): void {
    if (this.resizeDebounceId !== null) {
      clearTimeout(this.resizeDebounceId);
    }
    this.resizeDebounceId = setTimeout(() => {
      this.resizeDebounceId = null;
      void this.handleResize();
    }, 200);
  }

  private async handleResize(): Promise<void> {
    const container = this.containerRef().nativeElement;
    const rect = container.getBoundingClientRect();
    const step = this.paramsForm.controls.step.value;
    const { width, height } = computeAlignedMazeSize(rect.width, rect.height, step);
    const canvas = this.canvasRef().nativeElement;

    if (canvas.width === width && canvas.height === height) {
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    if (this.hasGenerated() && !this.generating()) {
      this.generating.set(true);
      try {
        await this.runGeneration();
      } finally {
        this.generating.set(false);
      }
    }
  }

  private getParams(): LabyrinthParams {
    const value = this.paramsForm.getRawValue();
    return {
      step: value.step,
      probability: value.probability,
      depth: value.depth,
      plr: value.plr,
    };
  }

  private async runGeneration(): Promise<void> {
    const canvas = this.canvasRef().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    await labyrinthGenAsync(ctx, canvas.width, canvas.height, this.getParams());
  }
}
