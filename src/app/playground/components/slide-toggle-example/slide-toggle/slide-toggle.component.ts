import { Component, EffectRef, Input, OnDestroy, computed, effect, forwardRef, output, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { SlideToggleOrientationType } from 'src/app/playground/models/slide-toggle.types';

export function stringAttributeTransform(value: any): string | null {
  return (typeof value === 'string') ? value as string : null;
}


@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true
    }
  ]
})
export class SlideToggleComponent implements OnDestroy, ControlValueAccessor, Validator  {
  private _toggleState = signal(false);
  private previousState: boolean | null = null;
  @Input() orientation: SlideToggleOrientationType = 'horizontal';
  @Input()
  get value(): boolean {
    return this._toggleState();
  }
  set value(value: boolean) {
    this._toggleState.set(value);
  }
  private _spin = signal(false);
  @Input()
  set spin(v: boolean) {
    this._spin.set(v);
    if (v) {
      this.previousState = this._toggleState();
      this._toggleState.set(false);
    } else {
      this._toggleState.set(this.previousState!);
    }
    this.disable = v;
  }
  get spin(): boolean {
    return this._spin();
  }
  @Input() validValue: boolean | null = null;
  @Input() knobColor: string = 'white';
  //@Input() knobWaitSpinnerColor: string = 'blue';
  @Input({ transform: stringAttributeTransform }) knobWaitSpinnerColor: string = 'blue';
  @Input() toggleOnStyle: { [key: string]: string; } = {};
  @Input() toggleOffStyle: { [key: string]: string; } = {};

  disable: boolean = false;

  valueChanged = output<boolean>();

  private _effectRef: EffectRef = effect(() => {
    this.valueChanged.emit(this._toggleState());
  });

  status = computed(() => {
    if (this._spin()) {
      return 'wait';
    } else if (this._toggleState()) {
      return 'on';
    } else {
      return 'off';
    };
  });


  private onChange: (value: boolean) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: boolean): void {
    this._toggleState.set(value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  toggleClick(): void {
    this._toggleState.update((value) => !value);
    this.onChange(this._toggleState());
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (this.validValue !== null) {
      if (value !== this.validValue) {
        return { 'invalidValue': true };
      }
    }
    return null;
  }

  ngOnDestroy() {
    if (this._effectRef) {
      this._effectRef.destroy();
    }
  }
}
