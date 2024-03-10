import { Component, DestroyRef, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChecklistComponent } from 'src/app/shared/components/checklist/checklist.component';
import { SelectionMode } from 'src/app/shared/components/checklist/selection-mode.enum';
import { ChecklistItem } from 'src/app/shared/models/checklist-item.model';

@Component({
    selector: 'app-nested-example',
    templateUrl: './nested-example.component.html',
    styleUrl: './nested-example.component.scss'
})
export class NestedExampleComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  exampleForm: FormGroup;
  githubLogoPath: string;
  checklistItems: ChecklistItem[] = [
    { id: 1, label: "Alistair McIntyre as bone breaker", selected: false, value: null, normal: false },
    { id: 2, label: "Erika Gusbakothy as brain miner", selected: false, value: null, normal: false },
    { id: 3, label: "Laszlo Kovari as a software developer", selected: false, value: null, normal: true },
    { id: 4, label: "Bor New as a milk machine", selected: false, value: null, normal: false },
    { id: 5, label: "Zodekap Edenwer as a dilettant", selected: false, value: null, normal: false },
    { id: 6, label: "Vanadis 10 faimous knife steel material", selected: false, value: null, normal: true },
    { id: 7, label: "Vanadis 10 This is a list item, where the label's text is longer than what used in the most common cases. This is the demonstration of how the test fit into two rows, and how aligned the icon.", selected: false, value: null, normal: false },
    { id: 8, label: "M390 is the best knife steel material", selected: false, value: null, normal: true }
  ];
  selectNormal = false;
  selectionMode = SelectionMode.SINGLE;
  // pass the element ref into the component
  @ViewChild('checkListRef', { read: ElementRef, static: true }) checkListReference: ElementRef; 
  // checkListGroup for capture the component to manage selection etc.
  @ViewChild('checkListGroup', { static: true }) checkListGroup: ChecklistComponent; 
  MULTISELECT = SelectionMode.MULTI;
  SINGLESELECT = SelectionMode.SINGLE;
  destroyRef: DestroyRef = inject(DestroyRef);
  
  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      selectionMode: this.formBuilder.control( { value: SelectionMode.SINGLE, disabled: false} ),
      selectNormal: this.formBuilder.control( { value: false, disabled: false } ),
      checkList: this.formBuilder.control( [ Validators.required ] )
    });
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
    this.exampleForm.get('selectionMode')?.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.selectionMode = value;
      this.exampleForm.get('selectNormal')?.patchValue(false);
    });
    this.exampleForm.get('selectNormal')?.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.selectNormal = value;
    });
    this.exampleForm.statusChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(status =>{
      console.log('ExampleForm statusChanges ' + status);
    });
    this.exampleForm.get('checkList')?.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(status =>{
      console.log('checkList component statusChanges ' + status);
      console.log('checkList Errors ', this.exampleForm.get('checkList')?.errors);
    });
  }

  onSubmit(form: FormGroup | null) {
    console.log(form);
  }


  showCheckedItems() {
    return this.checkListGroup.getSelectedItems();
  }

  onSelectAll() {
    this.checkListGroup.selectAllItems();
  }

  onUnselectAll() {
    this.checkListGroup.unselectAllItems();
    this.selectNormal = false;
  }

  extractSelectionMode(control: FormControl): SelectionMode {
    return control.value;
  }

  onClick(event: any) {
    console.log(event.value);
  }  
}
