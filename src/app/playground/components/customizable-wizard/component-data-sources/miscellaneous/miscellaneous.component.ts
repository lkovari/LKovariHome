import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-miscellaneous',
    templateUrl: './miscellaneous.component.html',
    styleUrl: './miscellaneous.component.scss',
    standalone: false
})
export class MiscellaneousComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  @Input() index: number = 0;
  @Input() lastPageIndex: number = 0;  
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
