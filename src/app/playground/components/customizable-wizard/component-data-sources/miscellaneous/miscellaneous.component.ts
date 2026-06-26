import { Component, DestroyRef, OnInit, inject, ChangeDetectionStrategy, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-miscellaneous',
    templateUrl: './miscellaneous.component.html',
    styleUrl: './miscellaneous.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, ReactiveFormsModule]
})
export class MiscellaneousComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  readonly index = input<number>(0);
  readonly lastPageIndex = input<number>(0);  
  miscellaneousForm: FormGroup = this.formBuilder.group({});
  destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this.miscellaneousForm = this.formBuilder.group({
      occupation: [''],
      religion: [''],
      hobbie: [''],
    });
  }

  getForm(): FormGroup {
    return this.miscellaneousForm;
  }
}
