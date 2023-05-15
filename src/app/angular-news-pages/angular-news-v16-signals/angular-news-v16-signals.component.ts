import { Component, OnInit, Signal, computed, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-news-v16-signals',
  templateUrl: './angular-news-v16-signals.component.html',
  styleUrls: ['./angular-news-v16-signals.component.scss'],
})
export class AngularNewsV16SignalsComponent implements OnInit {

  form = this.formBuilder.group({
    quantity: this.formBuilder.control(0, [
      Validators.required
    ]),
    payment: this.formBuilder.control(0, [
      Validators.required
    ]),
    writeoff: this.formBuilder.control(0, [ ]),
    amount: this.formBuilder.control({ value: 0, disabled: true }),
  });

  quantitySignal = signal(0);
  paymentSignal = signal(0);
  writeoffSignal = signal(0);
  amountSignal: Signal<number> = computed(() => (this.paymentSignal() * this.quantitySignal()) - this.writeoffSignal());


  constructor(private formBuilder: FormBuilder) {
    effect(() => {
      this.form.controls.amount.setValue(this.amountSignal());
      console.log(`The current Amount is: ${this.amountSignal()}`);
    }, { allowSignalWrites: true });    
  }

  ngOnInit(): void {
    //this.amountSignal()
    this.form.valueChanges.subscribe((value) => {
      this.quantitySignal.set(value.quantity!);
      this.paymentSignal.set(value.payment!);
      this.writeoffSignal.set(value.writeoff!);
      console.log(value);
    });
  }

  onSubmit(form: FormGroup) {
    console.log('onSubmit ', form.value);
  }
}
