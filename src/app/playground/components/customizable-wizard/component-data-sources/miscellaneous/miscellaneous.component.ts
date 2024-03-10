import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss'
})
export class MiscellaneousComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  @Input() index: number;
  @Input() lastPageIndex: number;  
  miscellaneousForm: FormGroup;
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
