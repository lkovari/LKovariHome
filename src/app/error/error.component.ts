import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorEntry } from '../shared/models/error-entry.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ErrorNotificationService } from '../shared/services/error-handler/error-notification.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit, OnDestroy {
  errorEntries: ErrorEntry[] = [];
  private errorSubscription!: Subscription;

  constructor(private errorNotification: ErrorNotificationService) { }

  ngOnInit(): void {
    this.errorSubscription = this.errorNotification.currentErrorEntries$.subscribe(
      (errors) => (this.errorEntries = errors)
    );
  }

  ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }
}
