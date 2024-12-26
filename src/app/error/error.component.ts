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
  private effectRef;

  constructor(private globalErrorHandlerService: GlobalErrorHandlerService) {
    this.effectRef = effect(() => {
      this.errorEntries = this.globalErrorHandlerService.getErrorEntries();
      console.log(`Errors: ${this.errorEntries.length}`);
    });
  }
  ngOnDestroy(): void {
    this.effectRef.destroy();
  }
}
