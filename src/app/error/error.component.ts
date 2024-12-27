import { Component, effect, OnDestroy } from '@angular/core';
import { GlobalErrorHandlerService } from '../shared/services/error-handler/global-error-handler.service';
import { ErrorEntry } from '../shared/models/error-entry.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-error',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnDestroy {
  errorEntries: ErrorEntry[] = [];
  hasErrorOccurred: boolean = false;
  private _effectRef;

  constructor() {
    this._effectRef = effect(() => {
      this.errorEntries = GlobalErrorHandlerService.errorEntries;
      console.log(`Errors: ${this.errorEntries.length}`);
    });
  }

  ngOnDestroy(): void {
    if (this._effectRef) {
      this._effectRef.destroy();
    }
  }
}
