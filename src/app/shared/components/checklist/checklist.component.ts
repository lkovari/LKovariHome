import { Component, OnInit, inject, AfterViewInit, DestroyRef, output, ChangeDetectionStrategy, input, model, effect } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';
import { IChecklistItem } from '../../models/checklist-item.interface';
import { ChecklistValidators } from './checklist-validator';
import { SelectionMode } from './selection-mode.enum';
import { ChecklistItem } from '../../models/checklist-item.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, ReactiveFormsModule]
})
export class ChecklistComponent implements OnInit, FormValueControl<IChecklistItem[]>, AfterViewInit {
  private formBuilder = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  value = model<IChecklistItem[]>([]);
  checklistItems = input<IChecklistItem[]>([]);
  selectionMode = input<SelectionMode>(SelectionMode.SINGLE);
  selectNormal = input<boolean>(false);
  readonly style = input<Record<string, string>>();
  readonly styleClass = input<string>('');
  readonly listStyle = input<Record<string, string>>();
  readonly listStyleClass = input<string>('');
  disabled = input<boolean>(false);
  showErrorInside = input(false);
  required = input<boolean>(false);
  touch = output<void>();

  hoverIndex: number | null = null;
  itemClick = output<FormGroup[]>();
  mainForm!: FormGroup;

  private previousSelectionMode = SelectionMode.SINGLE;

  constructor() {
    effect(() => {
      const items = this.checklistItems();
      if (!this.mainForm) {
        this.createInternalNestedForm();
      }
      const formArray = this.getCheckListFormArray();
      formArray.clear({ emitEvent: false });
      for (const item of items) {
        formArray.push(this.createChecklistItem(item), { emitEvent: false });
      }
      const external = this.value();
      if (external.length > 0) {
        formArray.patchValue(external, { emitEvent: false });
      }
      this.setupValidatorsDinamically();
    });

    effect(() => {
      const mode = this.selectionMode();
      if (mode === this.previousSelectionMode) {
        return;
      }
      this.previousSelectionMode = mode;
      if (this.mainForm && this.getCheckListFormArray().length > 0) {
        this.clearSelection(false);
      }
    });

    effect(() => {
      const external = this.value();
      if (!this.mainForm || this.getCheckListFormArray().length === 0) {
        return;
      }
      const current = this.getCheckListFormArray().getRawValue();
      if (JSON.stringify(current) === JSON.stringify(external)) {
        return;
      }
      this.getCheckListFormArray().patchValue(external, { emitEvent: false });
    });
  }

  ngOnInit(): void {
    if (!this.mainForm) {
      this.createInternalNestedForm();
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

  ngAfterViewInit(): void {
    this.setupValidatorsDinamically();
  }

  createInternalNestedForm() {
    this.mainForm = this.formBuilder.group({
      checkListFormArray: this.formBuilder.array([], [ChecklistValidators.oneItemCheckRequiredValidator])
    });
  }

  hasNormalValue(ac: AbstractControl): boolean {
    if (ac instanceof FormGroup) {
      return Boolean(ac.get('normal')?.value);
    }
    return false;
  }

  getNormalValue(ac: AbstractControl): boolean {
    if (ac instanceof FormGroup) {
      return Boolean(ac.get('normal')?.value);
    }
    return false;
  }

  needToShowNormalItems(highlightNormal: boolean, ac: AbstractControl): boolean {
    return highlightNormal && this.hasNormalValue(ac) ? this.getNormalValue(ac) : false;
  }

  clearSelection(emitChange = true) {
    this.getCheckListFormArray().controls.forEach((abstractControl: AbstractControl) => {
      const formGroup: FormGroup = abstractControl as FormGroup;
      formGroup.get('selected')?.patchValue(false, { emitEvent: false });
    });
    if (emitChange) {
      this.emitValueChange();
    }
  }

  createChecklistItem(item?: IChecklistItem): FormGroup {
    const checklistItem = this.formBuilder.group({
      id: [-1, [Validators.required]],
      label: ['', [Validators.required]],
      value: [undefined],
      selected: this.formBuilder.control({ value: false, disabled: this.disabled() }),
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

  trackById(_ix: number, abstractControl: AbstractControl): number {
    const checkListItemFormGroup = abstractControl as FormGroup;
    return checkListItemFormGroup.value.id;
  }

  checklistItemClick(abstractControl: AbstractControl) {
    this.selectListItem(abstractControl);
    const checkListFormArray = this.mainForm.get('checkListFormArray') as FormArray;
    if (checkListFormArray) {
      this.itemClick.emit(checkListFormArray.controls as FormGroup[]);
    }
  }

  private emitValueChange(): void {
    this.value.set(this.getCheckListFormArray().getRawValue());
    this.touch.emit();
  }

  private unselectOtherItems(selectedFormGroup: FormGroup): void {
    this.getCheckListFormArray().controls.forEach((abstractControlItem: AbstractControl) => {
      const formGroupItem = abstractControlItem as FormGroup;
      if (formGroupItem.value.id !== selectedFormGroup.value.id) {
        const selected = formGroupItem.get('selected')?.value;
        if (selected) {
          formGroupItem.get('selected')?.patchValue(false, { emitEvent: false });
        }
      }
    });
    this.emitValueChange();
  }

  private setupValidatorsDinamically() {
    if (this.required()) {
      if (!this.getCheckListFormArray().hasValidator(ChecklistValidators.oneItemCheckRequiredValidator)) {
        this.getCheckListFormArray().addValidators(ChecklistValidators.oneItemCheckRequiredValidator);
      }
    } else if (this.getCheckListFormArray().hasValidator(ChecklistValidators.oneItemCheckRequiredValidator)) {
      this.getCheckListFormArray().removeValidators(ChecklistValidators.oneItemCheckRequiredValidator);
    }
    this.getCheckListFormArray().updateValueAndValidity({ emitEvent: false });
  }

  private setAllItemsSelection(selected: boolean) {
    this.getCheckListFormArray().controls.forEach((abstractControlItem: AbstractControl) => {
      const formGroupItem: FormGroup = abstractControlItem as FormGroup;
      formGroupItem.get('selected')?.patchValue(selected);
      formGroupItem.markAsTouched();
      formGroupItem.markAsDirty();
    });
    this.emitValueChange();
  }

  private setAllNormalItemsSelection(selected: boolean) {
    if (this.getCheckListFormArray()) {
      this.getCheckListFormArray().controls.forEach((abstractControlItem: AbstractControl) => {
        const formGroupItem: FormGroup = abstractControlItem as FormGroup;
        if (selected) {
          const normal = formGroupItem.get('normal')?.value;
          if (normal) {
            formGroupItem.get('selected')?.patchValue(normal);
          }
        } else if (formGroupItem.get('normal')?.value) {
          formGroupItem.get('selected')?.patchValue(false);
        }
        formGroupItem.markAsTouched();
        formGroupItem.markAsDirty();
      });
      this.emitValueChange();
    }
  }

  private selectListItem(abstractControl: AbstractControl | undefined) {
    if (!abstractControl) {
      return;
    }
    const formGroup = abstractControl as FormGroup;
    const selected = formGroup.get('selected')?.value;
    if (this.selectionMode() === SelectionMode.MULTI) {
      formGroup.get('selected')?.patchValue(!selected);
    } else {
      formGroup.get('selected')?.patchValue(!selected);
      this.unselectOtherItems(formGroup);
      return;
    }
    formGroup.get('selected')?.markAsTouched();
    formGroup.get('selected')?.markAsDirty();
    this.emitValueChange();
    formGroup.updateValueAndValidity();
  }

  getCheckListFormArray(): FormArray {
    return this.mainForm.get('checkListFormArray') as FormArray;
  }

  getSelectedItems(): IChecklistItem[] {
    const selArray = new Array<ChecklistItem>();
    this.getCheckListFormArray().controls.forEach((abstractControl: AbstractControl) => {
      const formGroup: FormGroup = abstractControl as FormGroup;
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
