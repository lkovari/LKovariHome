import { Component, DestroyRef, OnInit, Signal, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-news-v16-signals',
  templateUrl: './angular-news-v16-signals.component.html',
  styleUrls: ['./angular-news-v16-signals.component.scss'],
})
export class AngularNewsV16SignalsComponent implements OnInit {
  githubLogoPath!: string;
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
  statusText = "VALID";
  quantitySignal = signal(0);
  paymentSignal = signal(0);
  writeoffSignal = signal(0);
  amountSignal: Signal<number> = computed(() => (this.paymentSignal() * this.quantitySignal()) - this.writeoffSignal());
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(private formBuilder: FormBuilder) {
    effect(() => {
      this.form.controls.amount.setValue(this.amountSignal());
      console.log(`The current Amount is: ${this.amountSignal()}`);
    }, { allowSignalWrites: true });    
  }

  ngOnInit(): void {
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.quantitySignal.set(value.quantity!);
      this.paymentSignal.set(value.payment!);
      this.writeoffSignal.set(value.writeoff!);
      console.log(value);
    });
    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((status) => {
      this.statusText = status;
    });
  }

  onSubmit(form: FormGroup) {
    console.log('onSubmit ', form.value);
  }
}
