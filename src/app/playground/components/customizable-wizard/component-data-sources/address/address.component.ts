import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrl: './address.component.scss',
    standalone: false
})
export class AddressComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  addressForm: FormGroup = this.formBuilder.group({});
  @Input() index: number = 0;
  @Input() lastPageIndex: number = 0;
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{5}([- /]?[0-9]{4})?$'),
        ],
      ],
    });
  }

  getForm(): FormGroup {
    return this.addressForm;
  }
}
