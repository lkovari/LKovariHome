import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IWizardComponent } from '../../models/wizard-component.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit, IWizardComponent {
  addressForm: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  @Input() index: number;
  @Input() lastPageIndex: number;
  
  constructor() { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]]
    });
  }

  getForm(): FormGroup<any> {
    return this.addressForm;
  }

  setIx(v: number): void {
    this.index = v;
  }
  setLastItemIx(v: number): void {
    this.lastPageIndex = v;
  }
  setDefaultValues(): void {
    throw new Error('Method not implemented.');
  } 
}
