import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrl: './company.component.scss',
    standalone: false
})
export class CompanyComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  companyForm: FormGroup = this.formBuilder.group({});
  @Input() index: number = 0;
  @Input() lastPageIndex: number = 0;
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
