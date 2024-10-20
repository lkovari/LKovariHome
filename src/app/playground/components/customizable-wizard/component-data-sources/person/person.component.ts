import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  personForm: FormGroup = this.formBuilder.group({});
  @Input() index: number = 0;
  @Input() lastPageIndex: number = 0;
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
