import { Component, DestroyRef, OnInit, inject, ChangeDetectionStrategy, input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrl: './company.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, ReactiveFormsModule]
})
export class CompanyComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  companyForm: FormGroup = this.formBuilder.group({});
  readonly index = input<number>(0);
  readonly lastPageIndex = input<number>(0);
  destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: [''],
    });
  }

  getForm(): FormGroup {
    return this.companyForm;
  }
}
