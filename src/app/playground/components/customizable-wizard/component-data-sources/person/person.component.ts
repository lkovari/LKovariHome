import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent implements OnInit {
  personForm: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  @Input() index: number;
  @Input() lastPageIndex: number;
  destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [''],
      phone: ['', Validators.required],
    });
  }

  getForm(): FormGroup {
    return this.personForm;
  }
}
