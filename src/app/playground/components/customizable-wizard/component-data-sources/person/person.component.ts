import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IWizardComponent } from '../../models/wizard-component.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent implements OnInit, IWizardComponent {
  personForm: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  @Input() index: number;
  @Input() lastPageIndex: number;
  
  ngOnInit() {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [''],
    });
  }

  getForm(): FormGroup<any> {
    return this.personForm;
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
