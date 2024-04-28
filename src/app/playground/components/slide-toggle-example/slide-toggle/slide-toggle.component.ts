import { Component, EffectRef, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild, effect, forwardRef, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';
import { SlideToggleOrientation } from 'src/app/playground/models/slide-toggle.types';

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
export class SlideToggleComponent implements ControlValueAccessor, OnDestroy {
  @ViewChild('slideToggle') _sideToggleElementRef: ElementRef;
  @Input() orientation: SlideToggleOrientation = 'horizontal';

  private _toggleState = signal(false);

  @Input() 
  get value(): boolean {
    return this._toggleState();
  }
  set value(value: boolean) {
    this._toggleState.set(value);
  }

  @Output() valueChanged = new EventEmitter<boolean>();

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};
  private _effectRef: EffectRef;
  isDisabled: boolean = false;

  constructor() {
    this._effectRef = effect(() => {
      this.writeValue(this._toggleState());
      this.onChange(this._toggleState())
      this.onTouched();       
      this.valueChanged.emit(this._toggleState());
    }, {allowSignalWrites: true });    

  }

  writeValue(value: boolean): void {
    this._toggleState.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (this._sideToggleElementRef && this._sideToggleElementRef.nativeElement) {
      this._sideToggleElementRef.nativeElement.disabled = isDisabled;
    }
  }

  toggleClick(): void {
    this._toggleState.update((value) => !value);
0  }

  ngOnDestroy() {
    if (this._effectRef) {
      this._effectRef.destroy();
    }
  }
}
