import { Component, inject, OnInit } from '@angular/core';
import { GlobalErrorHandlerService } from '../shared/services/error-handler/global-error-handler.service';
import { ErrorEntry } from '../shared/models/error-entry.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-error',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit  {
  globalErrorHandlingService = inject(GlobalErrorHandlerService);
  errorEntries: ErrorEntry[] = [];

  ngOnInit(): void {
    this.errorEntries = this.globalErrorHandlingService.errorEntries;
  }
}
