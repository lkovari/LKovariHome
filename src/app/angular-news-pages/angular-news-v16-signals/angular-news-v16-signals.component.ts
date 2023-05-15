import { Component, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-news-v16-signals',
  templateUrl: './angular-news-v16-signals.component.html',
  styleUrls: ['./angular-news-v16-signals.component.scss'],
})
export class AngularNewsV16SignalsComponent implements OnInit {
  quantityMin = 1;
  paymentMin = 10;
  writeoffMin = 0;
  form = this.formBuilder.group({
    quantity: this.formBuilder.control(null, [
      Validators.required,
      Validators.min(this.quantityMin),
    ]),
    payment: this.formBuilder.control(null, [
      Validators.required,
      Validators.min(this.paymentMin),
    ]),
    writeoff: this.formBuilder.control(null, [
      Validators.min(this.writeoffMin),
    ]),
    amount: this.formBuilder.control(null, []),
  });

  quantitySignal: Signal<number>;
  paymentSignal: Signal<number>;
  writeoffSignal: Signal<number>;
  amountSignal: Signal<number>;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //this.amountSignal()
    this.form.valueChanges.subscribe((value) => {
      /*
      this.quantitySignal.set(signal(value.quantity));
      this.paymentSignal = signal(value.payment);
      this.writeoffSignal = signal(value.writeoff);
      */
     console.log(value);
    });
  }

  onSubmit(form: FormGroup) {
    console.log('onSubmit ', form.value);
  }
}
