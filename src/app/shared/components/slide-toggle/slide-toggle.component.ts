import { Component, computed, effect, input, model, output, ChangeDetectionStrategy } from '@angular/core';
import { FormCheckboxControl } from '@angular/forms/signals';

export function stringAttributeTransform(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class SlideToggleComponent implements FormCheckboxControl {
  checked = model(false);
  spin = input(false);
  orientation = input<'horizontal' | 'vertical'>('horizontal');
  validValue = input<boolean | null>(null);
  knobColor = input<string>('white');
  knobWaitSpinnerColor = input<string>('blue');
  toggleOnStyle = input<{ [key: string]: string }>({});
  toggleOffStyle = input<{ [key: string]: string }>({});
  disabled = input(false);
  touch = output<void>();
  valueChanged = output<boolean>();

  private previousState: boolean | undefined = undefined;

  status = computed(() => {
    if (this.spin()) {
      return 'wait';
    }
    return this.checked() ? 'on' : 'off';
  });

  constructor() {
    effect(() => {
      this.valueChanged.emit(this.checked());
    });

    effect(() => {
      const spinning = this.spin();
      if (spinning) {
        this.storePreviousState();
        this.checked.set(false);
      } else {
        this.restorePreviousState();
      }
    });
  }

  toggleClick(): void {
    if (this.disabled() || this.spin()) {
      return;
    }
    this.checked.update((value) => !value);
    this.touch.emit();
  }

  private storePreviousState() {
    if (this.previousState === undefined) {
      this.previousState = this.checked();
    }
  }

  private restorePreviousState() {
    if (this.previousState !== undefined) {
      this.checked.set(this.previousState);
      this.previousState = undefined;
    }
  }
}
