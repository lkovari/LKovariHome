import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ElementRef, inject, AfterViewInit, OnChanges, SimpleChanges, DestroyRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ControlValueAccessor, AbstractControl, NG_VALUE_ACCESSOR, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IChecklistItem } from '../../models/checklist-item.interface';
import { ChecklistValidators } from './checklist-validator';
import { SelectionMode } from './selection-mode.enum';
import { ChecklistItem } from '../../models/checklist-item.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';


export const CHECKLIST_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChecklistComponent),
  multi: true
};
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  providers: [CHECKLIST_VALUE_ACCESSOR],
  imports: [FormsModule, ReactiveFormsModule, NgClass]
})
export class ChecklistComponent implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  // private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  hoverIndex: any;
  @Input() elementRef!: ElementRef;
  @Input() showErrorInside = false;
  private _values: Array<IChecklistItem> = [];
  @Input()
  set checklistItems(v: Array<IChecklistItem>) {
    this._values = v;
    this._values.forEach((item: IChecklistItem) => {
      this.addChecklistItem(item);
    });
  }
  get checkListItems(): Array<IChecklistItem> {
    return this._values;
  }
  private _selectionMode: SelectionMode = SelectionMode.SINGLE;
  @Input()
  set selectionMode(v: SelectionMode) {
    this._selectionMode = v;
    if (this.getCheckListFormArray()) {
      this.clearSelection();
    }
  }
  get selectionMode(): SelectionMode {
    return this._selectionMode;
  }

  @Input() style: any;
  @Input() styleClass: string = '';
  @Input() listStyle: any;
  @Input() listStyleClass: string = '';
  @Input() disabled: boolean = false;

  private _selectNormal: boolean = false;
  @Input()
  set selectNormal(v: boolean) {
    this._selectNormal = v;
  }
  get selectNormal(): boolean {
    return this._selectNormal;
  }
  @Input() required: boolean = false;

  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  isDisabled = false;
  mainForm!: FormGroup;
  parentForm!: FormGroup;

  private onChange: (value: FormArray | null) => void = () => { };
  private onTouched: () => void = () => { };

  destroyRef: DestroyRef = inject(DestroyRef);

  // private formGroupDirective: FormGroupDirective can get parent FormGroup
  constructor(private formGroupDirective: FormGroupDirective) { }

  ngOnInit(): void {
    // define the checklist
    if (!this.mainForm) {
      this.createInternalNestedForm();
    }
    // get the parent form (FormGroup)
    this.parentForm = this.formGroupDirective.control as FormGroup;
    console.log('!=> Get the parent form with: this.parentForm = this.formGroupDirective.control as FormGroup;');

    // add items
    if (this.getCheckListFormArray().controls.length < 1) {
      this._values.forEach((item: IChecklistItem) => {
        this.addChecklistItem(item);
      });
    }
    this.mainForm.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(status => {
        console.log('mainForm status ', status);
      });

    this.getCheckListFormArray().statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(status => {
        console.log('CheckListFormArray Status ' + status);
      });

    this.getCheckListFormArray().valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
        console.log('CheckListFormArray Value ' + value);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['elementRef'] && changes['elementRef'].currentValue && this.formGroupDirective.control) {
      // capture parent form
      this.parentForm = this.formGroupDirective.control as FormGroup;
      console.log('!=> Get the parent form with: this.parentForm = this.formGroupDirective.control as FormGroup;');
      // capture the elementRef to get formGroupName attributze to replace formgGroup wich in used by the component
      const formGroupName = this.elementRef.nativeElement.getAttribute('formGroupName');
      console.log('!=> Get the nested formGroup of the parent form with: let formGroupName = this.elementRef.nativeElement.getAttribute(\'formGroupName\');');
      // replace the build checkList on the parent form with the checkListFormArray which built in this component
      this.parentForm.setControl(formGroupName, this.mainForm.controls['checkListFormArray']);
      console.log('!=> Set the parent form formGroup field (which is nested) with: this.parentForm.setControl(formGroupName, this.mainForm.controls[\'checkListFormArray\']);');
    }
  }

  ngAfterViewInit(): void {
    this.setupValidatorsDinamically();
  }

  createInternalNestedForm() {
    this.mainForm = this.formBuilder.group({
      checkListFormArray: this.formBuilder.array([], [ChecklistValidators.oneItemCheckRequiredValidator])
    });
  }

  hasNormalValue(ac: AbstractControl): boolean {
    let res = false;
    if (ac instanceof FormGroup) {
      const formArrayItem = <FormGroup>ac;
      res = Boolean(formArrayItem.get('normal'));
    }
    return res;
  }

  getNormalValue(ac: AbstractControl): boolean {
    let res = false;
    if (ac instanceof FormGroup) {
      const formArrayItem = <FormGroup>ac;
      res = formArrayItem.get('normal') && formArrayItem.get('normal')?.value;
    }
    return res;
  }

  needToShowNormalItems(selectNormal: boolean, ac: AbstractControl): boolean {
    return (selectNormal && this.hasNormalValue(ac) ? this.getNormalValue(ac) : false);
  }

  clearSelection() {
    this.getCheckListFormArray().controls.forEach((abstractControl: AbstractControl) => {
      const formGroup: FormGroup = <FormGroup>abstractControl;
      formGroup.get('selected')?.patchValue(false);
    });
    this.onChange(this.getCheckListFormArray().value);
    this.onTouched();
  }

  createChecklistItem(item?: IChecklistItem): FormGroup {
    // create one form item
    const checklistItem = this.formBuilder.group({
      id: [-1, [Validators.required]],
      label: ['', [Validators.required]],
      value: [undefined],
      selected: this.formBuilder.control({ value: false, disabled: this.disabled }),
      normal: [false]
    });
    if (item) {
      checklistItem.setValue({
        id: item.id,
        label: item.label,
        value: item.value,
        selected: item.selected,
        normal: item.normal
      });
    }
    return checklistItem;
  }

  addChecklistItem(item: IChecklistItem): void {
    if (!this.mainForm) {
      this.createInternalNestedForm();
    }
    this.getCheckListFormArray().push(this.createChecklistItem(item));
  }

  trackById(ix: number, abstractControl: AbstractControl): number {
    const checkListItemFormGroup = <FormGroup>abstractControl;
    ix + 1;
    return checkListItemFormGroup.value.id;
  }

  checklistItemClick(abstractControl: AbstractControl) {
    this.selectListItem(abstractControl);
    this.itemClick.emit(this.mainForm.controls['checkListFormArray']);
  }


  /*
   * Writes a new value to the element.
   *
   * This method will be called by the forms API to write to the view when programmatic
   * (model -> view) changes are requested.
   */
  writeValue(values: any[]): void {
    this.getCheckListFormArray()?.patchValue(values);
    this._values = values;
  }

  /*
   * Registers a callback function that should be called when the control's value
   * changes in the UI.
   *
   * This is called by the forms API on initialization so it can update the form
   * model when values propagate from the view (view -> model).
   */
  registerOnChange(fn: (value: FormArray | null) => void): void {
    this.onChange = fn;
  }

  /*
   * Registers a callback function that should be called when the control receives
   * a blur event.
   *
   * This is called by the forms API on initialization so it can update the form model
   * on blur.
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * This function is called by the forms API when the control status changes to
   * or from "DISABLED". Depending on the value, it should enable or disable the
   * appropriate DOM element.
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private unselectOtherItems(selectedFormGroup: FormGroup): void {
    // unselect other items in the FormArray
    this.getCheckListFormArray().controls.forEach((abstractControlItem: AbstractControl) => {
      const formGroupItem = <FormGroup>abstractControlItem;
      if (formGroupItem.value.id !== selectedFormGroup.value.id) {
        // original value
        const value = formGroupItem.get('selected')?.value;
        if (value) {
          formGroupItem.get('selected')?.patchValue(false);
          //!!!!!!!formGroupItem.markAsTouched();
          //!!!!!!!formGroupItem.markAsDirty();
        }
      }
    });
    this.onTouched();
    this.onChange(this.getCheckListFormArray().value);
  }

  private setupValidatorsDinamically() {
    // if the validation is required
    if (this.required) {
      // has not added oneItemCheckRequiredValidator
      if (!this.getCheckListFormArray().hasValidator(ChecklistValidators.oneItemCheckRequiredValidator)) {
        // add the oneItemCheckRequiredValidator
        this.getCheckListFormArray().addValidators(ChecklistValidators.oneItemCheckRequiredValidator);
      }
    } else {
      // has already added oneItemCheckRequiredValidator
      if (this.getCheckListFormArray().hasValidator(ChecklistValidators.oneItemCheckRequiredValidator)) {
        // remove oneItemCheckRequiredValidator
        this.getCheckListFormArray().removeValidators(ChecklistValidators.oneItemCheckRequiredValidator);
      }
    }
    this.getCheckListFormArray().updateValueAndValidity();
  }

  private setAllItemsSelection(selected: boolean) {
    this.getCheckListFormArray().controls.forEach((abstractControlItem: AbstractControl) => {
      const formGroupItem: FormGroup = <FormGroup>abstractControlItem;
      formGroupItem.get('selected')?.patchValue(selected);
      formGroupItem.markAsTouched();
      formGroupItem.markAsDirty();
    });
    this.onTouched();
    this.onChange(this.getCheckListFormArray().value);
  }

  private setAllNormalItemsSelection(selected: boolean) {
    if (this.getCheckListFormArray()) {
      this.getCheckListFormArray().controls.forEach((abstractControlItem: AbstractControl) => {
        const formGroupItem: FormGroup = <FormGroup>abstractControlItem;
        if (selected) {
          const normal = formGroupItem.get('normal')?.value;
          if (normal) {
            formGroupItem.get('selected')?.patchValue(normal);
          }
        } else {
          // only those items unselect which normal marked to true
          if (formGroupItem.get('normal')?.value) {
            formGroupItem.get('selected')?.patchValue(false);
          }
        }
        formGroupItem.markAsTouched();
        formGroupItem.markAsDirty();
      });
      this.onTouched();
      this.onChange(this.getCheckListFormArray().value);
    }
  }

  /**
   * 
   * @param abstractControl: AbstractControl 
   */
  private selectListItem(abstractControl: AbstractControl | undefined) {
    if (!abstractControl) {
      return;
    }
    const formGroup = <FormGroup>abstractControl;
    if (formGroup) {
      const value = formGroup.get('selected')?.value;
      if (this._selectionMode === SelectionMode.MULTI) {
        formGroup.get('selected')?.patchValue(!value);
      } else {
        // select the selected form model
        formGroup.get('selected')?.patchValue(!value);
        // unselected all other items
        this.unselectOtherItems(formGroup);
      }
      formGroup.get('selected')?.markAsTouched();
      formGroup.get('selected')?.markAsDirty();
      this.onTouched();
      this.onChange(this.getCheckListFormArray().value);
      formGroup.updateValueAndValidity();
    }
  }

  getCheckListFormArray(): FormArray {
    return this.mainForm.get('checkListFormArray') as FormArray;
  }

  getSelectedItems(): IChecklistItem[] {
    const selArray = new Array<ChecklistItem>();
    this.getCheckListFormArray().controls.forEach((abstractControl: AbstractControl) => {
      const formGroup: FormGroup = <FormGroup>abstractControl;
      if (formGroup.get('selected')?.value) {
        selArray.push(formGroup.value);
      }
    });
    return selArray;
  }

  unselectAllItems() {
    this.setAllItemsSelection(false);
  }

  selectAllItems() {
    this.setAllItemsSelection(true);
  }

  selectAllNormal() {
    this.setAllNormalItemsSelection(true);
  }

  unselectAllNormal() {
    this.setAllNormalItemsSelection(false);
  }

}