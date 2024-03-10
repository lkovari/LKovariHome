import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent implements OnInit {
  companyForm: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  @Input() index: number;
  @Input() lastPageIndex: number;
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
